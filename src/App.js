import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Toolbar,
  Typography
} from '@mui/material';

import ss_logo from '../src/assets/images/minilogo_ss.png'
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AndroidIcon from "@mui/icons-material/Android";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import MenuIcon from '@mui/icons-material/Menu';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import React, { useState } from 'react';
import { styled } from "@mui/material/styles";

import MiniDrawer from './components/mini-variant-drawer';
import Drawer from "./components/drawer"
import NavBar from './components/navbar';

// import './App.css';

function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 200, margin: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Game</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Game"
          onChange={handleChange}
        >
          <MenuItem value={10}>Soulcalibur VI</MenuItem>
          <MenuItem value={20}>Gran Turismo 7</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Avatar alt="Seyfer Studios Logo" src={ss_logo} />
          <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ margin: 2 }}>
              YouTube's Videos Formatting Web Tool
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <BasicSelect />
      <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h6" component="div" sx={{ margin: 2 }}>
          YouTube's Videos Formatting Web Tool
        </Typography>
      </Container>
      <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h6" component="div" sx={{ margin: 2 }}>
          YouTube's Videos Formatting Web Tool
        </Typography>
      </Container>
    </Box>
  );
}

// const Img = styled("img")({
//   width: 200,
//   height: "100%",
//   objectFit: "cover",
//   objectPosition: "center",
// });

function App() {
  const [drawerCompact, setDrawercompact] = useState(true);

  function handleClick() {
    setDrawercompact(!drawerCompact)
  };

  return (
    <>
      <NavBar onMenuClick={handleClick} />
      <Container fixed>
      <Drawer drawerCompact={drawerCompact} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dui vel lacus cursus consequat. Praesent pretium felis risus, ut vestibulum turpis semper quis. Nullam tristique consectetur pulvinar. Suspendisse potenti. Integer suscipit tempus malesuada. Donec dui massa, fringilla eget tempus in, tristique quis ante. Nulla nec quam porttitor, dignissim lorem nec, porta dolor. Sed auctor ex ut lacus scelerisque, ut elementum sapien tincidunt. Duis consectetur laoreet enim, in euismod tortor accumsan non. Vestibulum hendrerit non nisl at pellentesque. Praesent tortor quam, fermentum quis interdum non, tempus vel dolor. Aenean eleifend purus in sem tempor bibendum. Vivamus ullamcorper magna ac velit aliquet vulputate. Nulla ac mollis lorem, eu ullamcorper nunc. Nullam blandit dolor quis ullamcorper tristique.

            Pellentesque at cursus purus, eu efficitur sapien. Vestibulum at ligula congue, ultrices urna a, imperdiet odio. Fusce lorem magna, porta a nibh vel, bibendum pulvinar felis. Morbi eu viverra risus. Aliquam erat volutpat. Maecenas id odio gravida, fermentum turpis ut, blandit sapien. Mauris dictum in turpis vel lacinia. Phasellus feugiat neque sed nibh lacinia rutrum. Integer id enim orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus cursus ipsum vitae bibendum luctus. Aenean vestibulum ultricies ante tempus laoreet. Morbi sodales sapien a varius dignissim.

            Aliquam magna nisl, ultricies eu tincidunt ut, congue aliquam est. Curabitur tincidunt pellentesque nisi sit amet egestas. Suspendisse vel maximus sapien. Nunc enim nisl, commodo eu efficitur eu, placerat sit amet mi. Integer sodales pulvinar lectus, ut malesuada est ultricies at. Pellentesque ac sagittis libero. Nunc pretium velit a nulla porta ultricies ut ac tellus. Nulla vulputate fringilla ligula. Aliquam magna risus, efficitur vel molestie eget, facilisis id mi. Sed rutrum dapibus purus, quis venenatis risus viverra vitae. Duis consectetur maximus purus, et consequat augue blandit eu. Cras eu lorem eu neque gravida porta. Nulla facilisi. Nam quis rutrum sem. Fusce elementum, sem sit amet iaculis mattis, ligula ante mollis metus, vel ultrices mauris neque a neque. Mauris magna augue, scelerisque vel felis non, imperdiet feugiat ante.

            Donec sit amet justo purus. Nullam ac laoreet nisi. Aliquam aliquam ipsum mauris, at fringilla lectus blandit vitae. Integer semper mollis porta. Curabitur dui dui, aliquam ut rutrum quis, laoreet non turpis. Sed dui sapien, ultricies ut erat a, pharetra auctor elit. Morbi eu leo sem. Suspendisse commodo, quam eget ullamcorper accumsan, neque ex semper erat, vitae luctus dolor augue ac odio. Cras quis feugiat odio, eget porta ipsum. Vivamus varius nunc et neque fermentum, non lobortis nibh varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum est et orci tristique, et malesuada quam volutpat. Vivamus ultricies tincidunt nisl. Sed diam lorem, maximus vel augue ac, sagittis tempor leo.

            Phasellus ullamcorper metus sit amet massa dignissim semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas lorem nec nibh ultricies, nec facilisis ante aliquet. Nulla at metus sit amet purus elementum porta. Aenean condimentum dolor in velit eleifend dignissim. Aliquam non accumsan justo. Donec convallis felis tellus, rhoncus dapibus quam accumsan sit amet.</p>
      </Container>


      {/* <MiniDrawer /> */}
      {/* <ButtonAppBar />

      <Box sx={{ width: 250, bgcolor: "lightsalmon" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Draft" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary trash spam">
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#trash"
              >
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#spam"
              >
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>

      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          mt: 5,
        }}
      >
        <Img
          src="https://via.placeholder.com/200"
          alt="random"
        />
        <Box sx={{ flexGrow: 1 }}>
          <h2>Product Name</h2>
          <p>Product Description</p>
          <Button variant="contained">Add cart</Button>
        </Box>
        <Box
          component="p"
          sx={{ mr: 2 }}
        >
          $19.99
        </Box>
      </Paper>

      <Container>
        <Grid
          container={true}
          spacing={4}
        >
          <Grid
            item={true}
            xs={4}
            sm={4}
            md={4}
          >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/1000x200"
                  height="200"
                  alt="Card Image"
                />
                <CardContent>
                  <h2>Card Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                    deserunt optio exercitationem, fugit enim saepe iusto magnam ipsam
                    est cumque hic deleniti sequi neque soluta quas! Accusamus voluptate
                    alias optio.
                  </p>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button variant="contained">Add</Button>
                <Button>Remove</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item={true}
            xs={4}
            sm={4}
            md={4}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
              quisquam minima provident, ad magnam saepe impedit voluptatem
              ratione quas molestias! Nisi.
            </p>
          </Grid>
          <Grid
            item={true}
            xs={4}
            sm={4}
            md={4}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
              quisquam minima provident, ad magnam saepe impedit voluptatem
              ratione quas molestias! Nisi.
            </p>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Button
          variant="contained"
          color="info"
          startIcon={<AirplanemodeActiveIcon />}
        >
          Botón personalizado
        </Button>

        <Button
          variant="contained"
          color="secondary"
          endIcon={<AndroidIcon />}
        >
          Botón 2
        </Button>
      </Container>

      <Container>
        <Typography variant="h1">Soy un h1</Typography>
        <Typography variant="h2">Soy un h2</Typography>
        <Typography variant="h3">Soy un h3</Typography>

        <Button variant="contained">mi primer componente</Button>
        <Button variant="contained">mi primer componente</Button>
        <Button variant="contained">mi primer componente</Button>
      </Container>

      <Container sx={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >aksjdklasjdklajsdl</Box>
      </Container>
      <Box
        sx={{
          border: 2,
          borderColor: "peru",
          p: 2,
          bgcolor: "#111",
          color: "white",
        }}
      >
        <Typography align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe quas
          laudantium, enim praesentium maiores beatae impedit vero dolorum
          dignissimos, assumenda ipsam? Similique, mollitia commodi ducimus aliquid
          voluptate molestias laborum!
        </Typography>
      </Box> */}
    </>
  );
}

export default App;
