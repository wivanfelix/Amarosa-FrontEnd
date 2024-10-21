import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Alert, Box, Button, FormHelperText, TextField } from '@mui/material';
import { useAuth } from '../../hooks/use-auth';
import { useMounted } from '../../hooks/use-mounted';

export const JWTLogin = (props) => {
  const isMounted = useMounted();
  const router = useRouter();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Debe ser un email válido')
        .max(255)
        .required('El email es requerido'),
      password: Yup
        .string()
        .max(255)
        .required('La contraseña es requerida')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await login(values.email, values.password);

        if (isMounted()) {
          const returnUrl = router.query.returnUrl || '/dashboard';
          router.push(returnUrl).catch(console.error);
        }
      } catch (err) {
        console.error(err);

        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    }
  });

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      {...props}>
      <TextField
        autoFocus
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        helperText={formik.touched.email && formik.errors.email}
        label="Email Address"
        margin="normal"
        name="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="email"
        value={formik.values.email}
      />
      <TextField
        error={Boolean(formik.touched.password && formik.errors.password)}
        fullWidth
        helperText={formik.touched.password && formik.errors.password}
        label="Password"
        margin="normal"
        name="password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.password}
      />
      {formik.errors.submit && (
        <Box sx={{ mt: 3 }}>
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Box>
      )}
      <Box sx={{ mt: 2 }}>
        <Button
          disabled={formik.isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Iniciar Sesión
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Alert severity="info">
          <div>
            Utiliza
            {' '}
            <b>admin@amarosa.com</b>
            {' '}
            y la contraseña
            {' '}
            <b>Admin123.</b>
            {' '}
            para ingresar como <b>administrador</b>
            {' '}
          </div>
        </Alert>
        <Alert severity="warning" sx={{ mt: 2 }}>
          <div>
            Utiliza
            {' '}
            <b>cliente@amarosa.com</b>
            {' '}
            y la contraseña
            {' '}
            <b>Cliente741.</b>
            {' '}
            para ingresar como <b> cliente</b>
          </div>
        </Alert>
        <Alert severity="success" sx={{ mt: 2 }}>
          <div>
            Utiliza
            {' '}
            <b>cobrador@amarosa.com</b>
            {' '}
            y la contraseña
            {' '}
            <b>Cobrador741.</b>
            {' '}
            para ingresar como <b>cobrador</b>
          </div>
        </Alert>
      </Box>
    </form>
  );
};
