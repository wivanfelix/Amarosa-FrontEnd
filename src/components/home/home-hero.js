import NextLink from 'next/link';
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from '../../icons/check-circle-outlined';
import { Users as UsersIcon } from '../../icons/users';
import { Money as MoneyIcon } from '@mui/icons-material'; // Ícono de dinero
import { ReportProblem as ReportProblemIcon } from '@mui/icons-material'; // Ícono de mora
import { Gavel as GavelIcon } from '@mui/icons-material'; // Ícono de casos legales

export const HomeHero = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        pt: 6
      }}
      {...props}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            display: 'flex',            // Flexbox para centrar el contenido
            justifyContent: 'center',    // Centra horizontalmente
            alignItems: 'center',        // Centra verticalmente
            width: '100%',
            mb: 3,
          }}
        >
          <img
            alt="Amarosa"
            src="/Imagen1.png"  // Actualiza la ruta a la imagen que has subido
            style={{ width: '50%', height: 'auto' }}  // Asegúrate de que ocupe el 50% del ancho y mantenga la proporción
          />
        </Box>

        {/* <Typography
          align="center"
          variant="h1"
          color="primary"
          sx={{ fontWeight: 'bold', color: 'info.main' }}
        >
          AMAROSA
        </Typography>
        <Typography
          color="textPrimary"
          variant="subtitle1"
          align="center"
          sx={{ fontWeight: 'bold' }}
        >
          ¡Nosotros cobramos por usted!
        </Typography> */}
        <Typography
          align="justify"
          color="textSecondary"
          variant="subtitle1"
          sx={{ py: 3 }}
        >
          En el año 1993 como consecuencia de la necesidad en el mercado de Guatemala de ayudar a las entidades empresariales a mejorar, agilizar y recuperar sus carteras crediticias morosas o vencidas, y en la búsqueda de superarse en sus actividades y ser más productivas, decidimos formar un equipo de profesionales para la gestión Extrajudicial y/o Judicial, con la finalidad de brindar un Servicio Integral de Gestión, que permitiera una mayor confianza y seguridad en los resultados, y basados en la filosofía de{' '}
          <i>“Culturizar al potencial deudor en que un buen manejo del crédito es prestigio y respaldo”.</i>
        </Typography>
        {/* <Typography
          align="center"
          variant="h2"
          color="primary"
          sx={{ fontWeight: 'bold', mt: 4 }}
        >
          Nuestro lema:
        </Typography> */}

        <Box
          sx={{
            alignItems: {
              sm: 'center',
              xs: 'flex-start'
            },
            display: 'flex',
            flexDirection: {
              sm: 'row',
              xs: 'column'
            },
            py: 3,
            m: -1,
            '& > *': {
              m: 1
            }
          }}
        ></Box>
      </Container>
      {/* Se puede agregar una imagen o ilustración relevante aquí */}
    </Box>
  );
};
