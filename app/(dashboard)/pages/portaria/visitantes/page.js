'use client'
import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

// modal 
import Modal from '@mui/material/Modal';

// components
import NewVisitantes from "sub-components/portaria/visitantes/modal/newVisitantes";


import InputBase from "@mui/material/InputBase";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function Visitantes() {

  const [openVisitantes, setOpenVisitantes] = React.useState(false);
  const handleOpenVisitantes = () => setOpenVisitantes(true);
  const handleCloseVisitantes = () => setOpenVisitantes(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3.8} marginTop={2} marginLeft={2}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                variant="h5"
                align="center"
                component="h1"
                color={"CaptionText"}
              >
                Total de visitantes
              </Typography>
              <Typography variant="h3" color="text.secondary" align="center">
                50
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Saiba mais</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid xs={3.8} marginTop={4} marginLeft={2}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                variant="h5"
                align="center"
                component="h1"
                color={"CaptionText"}
              >
                Total de Hóspedes
              </Typography>
              <Typography variant="h3" color="text.secondary" align="center">
                12
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Saiba mais</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid xs={3.8} marginTop={4} marginLeft={2}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                variant="h5"
                align="center"
                component="h1"
                color={"CaptionText"}
              >
                Prestadores de Serviço
              </Typography>
              <Typography variant="h3" color="text.secondary" align="center">
                5
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Saiba mais</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* area de pesquisa e botao  */}
        <Grid xs={11.5} marginTop={2} marginLeft={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Stack direction="row" spacing={1} marginLeft={7}>
                <div>
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 800,
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Procurar Visitante"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                  </Paper>
                </div>
                <div>
                <Button variant="contained">Novo Visitante</Button>
               
                </div>

                <div marginLeft="50">
                <Button variant="contained">Novo Hóspede</Button>
                </div>

                <div marginLeft="50">
                <Button variant="contained">Novo Prestador de Serviço</Button>
                </div>
              </Stack>
            </CardContent>
           
          </Card>
        </Grid>

        <Grid xs={11.5} marginTop={4} marginLeft={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                area tabela
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
