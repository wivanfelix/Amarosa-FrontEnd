import { useState } from 'react';
import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  ListItemIcon
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { Cog as CogIcon } from '../../icons/cog';
import { Lock as LockIcon } from '../../icons/lock';
import { MinusOutlined as MinusOutlinedIcon } from '../../icons/minus-outlined';
import { Template as TemplateIcon } from '../../icons/template';
import { FiberManualRecord } from '@mui/icons-material';

const getFeatures = (theme) => ([
  {
    icon: LockIcon,
    image: `/static/home/auth_${theme}.png`,
    items: ['Amplify', 'Auth0', 'Firebase', 'JWT'],
    subheader: 'Identity services fully integrated. Choose from:',
    title: 'Auth System'
  },
  {
    icon: CogIcon,
    items: [
      'Dashboard',
      'Checkout',
      'User Management',
      'Product Management',
      'Invoice Generator',
      'Charts API',
      'Landing/Home',
      'And many more'
    ],
    subheader: 'Get started with ready-to-deploy templates.',
    image: `/static/home/flows_${theme}.png`,
    title: 'Management Pages'
  },
  {
    icon: TemplateIcon,
    image: `/static/home/landing_${theme}.png`,
    items: ['Home or Landing', 'Contact Us', 'Blog', 'Pricing'],
    subheader: 'We also have included all the necessary layouts for a startup.',
    title: 'Landing Pages'
  }
]);

export const HomeFeatures = (props) => {
  const theme = useTheme();
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = getFeatures(theme.palette.mode);

  const handleChangeFeature = (index) => {
    setSelectedFeature(index);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        py: 10
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Columna de texto a la izquierda */}
          <Grid item md={6} xs={12}>
            {/* Título con fondo azul */}
            <Box
              sx={{
                backgroundColor: theme.palette.info.main,
                borderRadius: 1,
                display: 'inline-block',
                px: 3,
                py: 1,
                mb: 3
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontWeight: 'bold'
                }}
              >
                NUESTRA ESTRATEGIA
              </Typography>
            </Box>

            {/* Lista de elementos */}
            <List>
              {[
                "Asesoría, inducción y capacitación para ofrecer servicios de gestión efectivos, ayudando a nuestros clientes a conocer a sus potenciales deudores.",
                "Operar a través de nuestra presencia local, ofreciendo a los clientes y deudores servicios que se adaptan a la madurez, regulaciones y prácticas de su mercado.",
                "Aportamos beneficios para los clientes a través de mejores métodos y procesos.",
                "Trabajamos constantemente en mejorar la calidad de los servicios que ofrecemos a nuestros clientes.",
                "Contamos con el recurso humano de alto nivel, disponible y comprometido, para el logro y cumplimiento de los planes y programas tanto personales, como empresariales de nuestros clientes.",
                "Con nuestros servicios cubrimos sectores como Bancario y Financiero, Administrativos, Industrial y Manufacturero, Agropecuario, Farmacéutico y Químico, Alimenticio, Construcción, Plásticos y Papel, Comercio, Inmobiliarias, Gestorías de Inmuebles y Servicios."
              ].map((text, index) => (
                <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
                  <ListItemIcon>
                    <FiberManualRecord sx={{ color: theme.palette.info.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      variant: 'body1',
                      sx: { color: 'text.secondary' },
                      textAlign: 'justify'
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Imagen de la persona a la derecha */}
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                position: 'relative',
                '& img': {
                  height: 'auto',
                  width: '100%'
                }
              }}
            >
              <img
                alt="Estrategia"
                src="/Estrategia-empresarial-y-pasos-de-implementación.jpg" // Actualiza la ruta a tu imagen
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
