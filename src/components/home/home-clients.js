import { Box, Card, Container, Grid, Link, Typography } from '@mui/material';
import { CobranzaForm } from '../widgets/forms/solicitud-cobranza'; // Asegúrate de que esta ruta sea correcta

export const HomeClients = (props) => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      py: 15
    }}
    {...props}>
    <Container maxWidth="lg">
      <Typography
        align="center"
        sx={{ pb: 6 }}
        variant="h3"
      >
        Solicitud de Cobranza
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', textAlign: 'justify' }}>
        Este formulario es el primer paso para iniciar el proceso de cobro. Después de completar y enviar la solicitud,
        será evaluada por nuestro equipo. Si es aprobada, nos comunicaremos con usted para continuar el proceso. En caso de ser rechazada,
        recibirá un correo con las razones específicas del rechazo.
      </Typography>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={12}
          xs={12}
        >
          {/* Aquí insertamos el formulario de cobranza */}
          <Card
            sx={{
              height: '100%',
              p: 3,
              position: 'relative'
            }}
            variant="outlined"
          >
            <CobranzaForm /> {/* Formulario importado */}
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
