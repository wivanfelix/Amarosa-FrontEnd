import React from 'react';
import {
    Box,
    Button,
    CardActions,
    CardContent,
    Divider,
    Grid,
    TextField,
    MenuItem,
    Typography
} from '@mui/material';
import * as yup from "yup";
import { useFormik } from "formik";
import axios from 'axios';

const schema = yup.object().shape({
    tipoCredito: yup.string().required("Campo requerido"),
    nombresCliente: yup.string().required("Campo requerido"),
    apellidosCliente: yup.string().required("Campo requerido"),
    empresaCliente: yup.string().required("Campo requerido"),
    emailCliente: yup.string().email("Debe ser un email válido").required("Campo requerido"),
    telefonoCliente: yup.string().length(8, "Debe tener 8 dígitos").required("Campo requerido"),
    montoCredito: yup.number().min(1000, "El crédito debe ser de al menos Q1000.00").required("Campo requerido"),
    diasEnMora: yup.string().required("Campo requerido"),
    primerNombreDeudor: yup.string().required("Campo requerido"),
    segundoNombreDeudor: yup.string(),
    primerApellidoDeudor: yup.string().required("Campo requerido"),
    segundoApellidoDeudor: yup.string(),
    cuiDeudor: yup.string().length(13, "Debe tener 13 dígitos").required("Campo requerido"),
});

const creditTypes = [
    { text: 'PRÉSTAMO EMPRESARIAL CON GARANTÍA FIDUCIARIA', value: 'empresarial_fiduciaria' },
    { text: 'PRÉSTAMO PERSONAL CON GARANTÍA FIDUCIARIA', value: 'personal_fiduciaria' },
    { text: 'RAPICREDIT PREFERENCIAL', value: 'rapicredit_preferencial' },
    { text: 'RAPICREDIT PREMIUM', value: 'rapicredit_premium' },
];

export const CobranzaForm = () => {
    const formik = useFormik({
        initialValues: {
            tipoCredito: "",
            nombresCliente: "",
            apellidosCliente: "",
            empresaCliente: "",
            emailCliente: "",
            telefonoCliente: "",
            montoCredito: "",
            diasEnMora: "",
            primerNombreDeudor: "",
            segundoNombreDeudor: "",
            primerApellidoDeudor: "",
            segundoApellidoDeudor: "",
            cuiDeudor: "",
            estado: "Pendiente"
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            // console.log(values);
            // Aquí puedes manejar el envío, por ejemplo usando axios:
            axios.post('http://localhost:3000/api/solicitud-cobranza/', values);
            resetForm();
        },
    });

    return (
        <Box
            sx={{
                backgroundColor: 'background.paper',
                minHeight: '100%',
                p: 3,
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
        >
            <form onSubmit={formik.handleSubmit}>
                <CardContent>
                    <Grid container spacing={4}>
                        {/* Tipo de Crédito */}
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Tipo de Crédito"
                                name="tipoCredito"
                                select
                                value={formik.values.tipoCredito}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.tipoCredito && Boolean(formik.errors.tipoCredito)}
                                helperText={formik.touched.tipoCredito && formik.errors.tipoCredito}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            >
                                {creditTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.text}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* Datos del Cliente */}
                        <Grid item xs={12}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}>
                                Datos del Cliente
                            </Typography>
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Nombres del Cliente"
                                name="nombresCliente"
                                value={formik.values.nombresCliente}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.nombresCliente && Boolean(formik.errors.nombresCliente)}
                                helperText={formik.touched.nombresCliente && formik.errors.nombresCliente}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Apellidos del Cliente"
                                name="apellidosCliente"
                                value={formik.values.apellidosCliente}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.apellidosCliente && Boolean(formik.errors.apellidosCliente)}
                                helperText={formik.touched.apellidosCliente && formik.errors.apellidosCliente}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Empresa del Cliente"
                                name="empresaCliente"
                                value={formik.values.empresaCliente}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.empresaCliente && Boolean(formik.errors.empresaCliente)}
                                helperText={formik.touched.empresaCliente && formik.errors.empresaCliente}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Email del Cliente"
                                name="emailCliente"
                                type="email"
                                value={formik.values.emailCliente}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.emailCliente && Boolean(formik.errors.emailCliente)}
                                helperText={formik.touched.emailCliente && formik.errors.emailCliente}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Teléfono del Cliente"
                                name="telefonoCliente"
                                value={formik.values.telefonoCliente}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.telefonoCliente && Boolean(formik.errors.telefonoCliente)}
                                helperText={formik.touched.telefonoCliente && formik.errors.telefonoCliente}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                                inputProps={{ maxLength: 8 }}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Monto del Crédito (en quetzales)"
                                name="montoCredito"
                                type="number"
                                value={formik.values.montoCredito}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.montoCredito && Boolean(formik.errors.montoCredito)}
                                helperText={formik.touched.montoCredito && formik.errors.montoCredito}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Días en Mora"
                                name="diasEnMora"
                                value={formik.values.diasEnMora}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.diasEnMora && Boolean(formik.errors.diasEnMora)}
                                helperText={formik.touched.diasEnMora && formik.errors.diasEnMora}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>

                        {/* Datos del Deudor */}
                        <Grid item xs={12}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mt: 4, mb: 2 }}>
                                Datos del Deudor
                            </Typography>
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Primer Nombre del Deudor"
                                name="primerNombreDeudor"
                                value={formik.values.primerNombreDeudor}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.primerNombreDeudor && Boolean(formik.errors.primerNombreDeudor)}
                                helperText={formik.touched.primerNombreDeudor && formik.errors.primerNombreDeudor}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Segundo Nombre del Deudor"
                                name="segundoNombreDeudor"
                                value={formik.values.segundoNombreDeudor}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.segundoNombreDeudor && Boolean(formik.errors.segundoNombreDeudor)}
                                helperText={formik.touched.segundoNombreDeudor && formik.errors.segundoNombreDeudor}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Primer Apellido del Deudor"
                                name="primerApellidoDeudor"
                                value={formik.values.primerApellidoDeudor}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.primerApellidoDeudor && Boolean(formik.errors.primerApellidoDeudor)}
                                helperText={formik.touched.primerApellidoDeudor && formik.errors.primerApellidoDeudor}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Segundo Apellido del Deudor"
                                name="segundoApellidoDeudor"
                                value={formik.values.segundoApellidoDeudor}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.segundoApellidoDeudor && Boolean(formik.errors.segundoApellidoDeudor)}
                                helperText={formik.touched.segundoApellidoDeudor && formik.errors.segundoApellidoDeudor}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="CUI del Deudor"
                                name="cuiDeudor"
                                value={formik.values.cuiDeudor}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.cuiDeudor && Boolean(formik.errors.cuiDeudor)}
                                helperText={formik.touched.cuiDeudor && formik.errors.cuiDeudor}
                                inputProps={{ maxLength: 13 }}
                                sx={{ backgroundColor: 'background.default', borderRadius: 1 }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>

                <Divider sx={{ my: 2 }} />

                <CardActions
                    sx={{
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                >
                    <Button
                        color="primary"
                        type="submit"
                        variant="contained"
                        sx={{ borderRadius: 2, px: 4, py: 1.5 }}
                    >
                        Enviar Solicitud
                    </Button>
                </CardActions>
            </form>
        </Box>
    );
};
