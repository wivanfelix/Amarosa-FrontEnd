import { Box, Button, Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ExternalLink as ExternalLinkIcon } from '../../icons/external-link';
import { FiberManualRecord } from '@mui/icons-material';

export const HomeDesigners = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        py: 15
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          alignItems="center"
        >
          {/* Imagen lado izquierdo */}
          <Grid
            item
            md={6}
            xs={12}
          >
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
                alt="Amarosa Objetivos"
                src={`/towfiqu-barbhuiya-nApaSgkzaxg-unsplash.jpg`}  // Actualiza la ruta de la imagen según tu archivo
              />
            </Box>
          </Grid>

          {/* Texto de objetivos lado derecho */}
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography variant="h4" sx={{ color: theme.palette.info.main, mb: 3 }}>
              OBJETIVOS
            </Typography>
            <List>
              <ListItem key={0} sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon>
                  <FiberManualRecord sx={{ color: theme.palette.info.main }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Realizar de manera permanente, mejoras que nos permitan elevar nuestro índice de resultados en los servicios que prestamos."}
                  primaryTypographyProps={{
                    variant: 'body1',
                    textAlign: 'justify',
                    sx: { color: 'text.secondary' }
                  }}
                />
              </ListItem>
              <ListItem key={1} sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon>
                  <FiberManualRecord sx={{ color: theme.palette.info.main }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Diseñar y aplicar programas de capacitación y desarrollo a nuestro personal, a fin de profesionalizar el análisis de la gestión y cobranza, ampliando las posibilidades de autorrealización de nuestro recurso humano."}
                  primaryTypographyProps={{
                    variant: 'body1',
                    textAlign: 'justify',
                    sx: { color: 'text.secondary' }
                  }}
                />
              </ListItem>
              <ListItem key={2} sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon>
                  <FiberManualRecord sx={{ color: theme.palette.info.main }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Ampliar nuestra capacidad instalada de acuerdo a las necesidades de cobranza de nuestros clientes, realizando inversiones en materia de infraestructura, equipos e innovación de logística, con tecnología de punta en el mercado financiero y crediticio."}
                  primaryTypographyProps={{
                    variant: 'body1',
                    textAlign: 'justify',
                    sx: { color: 'text.secondary' }
                  }}
                />
              </ListItem>
              <ListItem key={3} sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon>
                  <FiberManualRecord sx={{ color: theme.palette.info.main }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Detectar, implantar y desarrollar tecnologías de información y estrategias de cobranza que nos permitan incrementar notablemente la velocidad y productividad de todos los procesos que inciden en los resultados de la gestión."}
                  primaryTypographyProps={{
                    variant: 'body1',
                    textAlign: 'justify',
                    sx: { color: 'text.secondary' }
                  }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
