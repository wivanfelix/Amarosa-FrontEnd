import NextLink from 'next/link';
import { Box, Button, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const HomeDevelopers = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        py: 10
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 'bold', color: theme.palette.info.main }}
        >
          NUESTROS VALORES
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{ mt: 4, display: 'flex', alignItems: 'stretch' }}
        >
          {/* Card for Integridad y Respeto */}
          <Grid
            item
            md={4}
            xs={12}
            sx={{ display: 'flex' }}
          >
            <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>  {/* flexGrow para ocupar toda la altura */}
              <CardMedia
                sx={{ height: 140 }}
                image="/masjid-maba-vLk55UWfFdk-unsplash.jpg"
                title="Integridad y Respeto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                  INTEGRIDAD Y RESPETO:
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Valorar a los demás considerando su dignidad, acogiéndose siempre a la verdad y a los hechos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card for Disciplina, Compromiso y Liderazgo */}
          <Grid
            item
            md={4}
            xs={12}
            sx={{ display: 'flex' }}
          >
            <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>  {/* flexGrow para ocupar toda la altura */}
              <CardMedia
                sx={{ height: 140 }}
                image="/scott-graham-OQMZwNd3ThU-unsplash.jpg"
                title="Disciplina, Compromiso y Liderazgo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                  DISCIPLINA, COMPROMISO Y LIDERAZGO:
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Poner al máximo nuestras capacidades para sacar adelante todo aquello que se nos ha confiado, porque conocemos las condiciones que estamos aceptando y las obligaciones que éstas conllevan.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card for Superación y Resultados */}
          <Grid
            item
            md={4}
            xs={12}
            sx={{ display: 'flex' }}
          >
            <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>  {/* flexGrow para ocupar toda la altura */}
              <CardMedia
                sx={{ height: 140 }}
                image="/jakub-zerdzicki-ykgLX_CwtDw-unsplash.jpg"
                title="Superación y Resultados"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                  SUPERACIÓN Y RESULTADOS:
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lograr extraordinarios resultados en base a una actividad ordenada, sencilla y práctica, sin perder de vista el rendimiento y al mismo tiempo seguimiento a los clientes y a nuestro equipo humano satisfechos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
