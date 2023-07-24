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

import Drawer from "./components/drawer"
import NavBar from './components/navbar';
// import ComboBox from './components/combo-box';
import CustomizedHook from './components/combo-box';
import MultipleSelectCheckmarks from './components/combo-box';
import FilePicker from './components/file-picker';


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


function App() {
  const [drawerCompact, setDrawercompact] = useState(true);
  const [gameName, setGamename] = useState("");
  const [filePath, setFilepath] = useState("");
  // const [path_mkvmerge, setPathmkvmerge] = useState("");

  function handleMenuClick() {
    setDrawercompact(!drawerCompact)
  };

  function handleItemClick(game) {
    setGamename(game);
  }

  function handleFileSelected(file_path) {
    setFilepath(file_path);
  }

  return (
    <>
      <NavBar onMenuClick={handleMenuClick} />
      <Box sx={{ display: "flex", flexDirection: "row" }}>

        <Drawer drawerCompact={drawerCompact} onItemClick={handleItemClick} />
        <Box
          border={1}
          borderColor="primary.main"
          borderRadius={4}
          width="100%"
          height="100%"
          margin={1}
        >
          <Typography>{gameName}</Typography>
          <Typography>{filePath}</Typography>
          <FilePicker onFileSelected={handleFileSelected} />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />
          <MultipleSelectCheckmarks entityType="Players" />

        </Box>


        {/* <Typography sx={{ padding: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dui vel lacus cursus consequat. Praesent pretium felis risus, ut vestibulum turpis semper quis. Nullam tristique consectetur pulvinar. Suspendisse potenti. Integer suscipit tempus malesuada. Donec dui massa, fringilla eget tempus in, tristique quis ante. Nulla nec quam porttitor, dignissim lorem nec, porta dolor. Sed auctor ex ut lacus scelerisque, ut elementum sapien tincidunt. Duis consectetur laoreet enim, in euismod tortor accumsan non. Vestibulum hendrerit non nisl at pellentesque. Praesent tortor quam, fermentum quis interdum non, tempus vel dolor. Aenean eleifend purus in sem tempor bibendum. Vivamus ullamcorper magna ac velit aliquet vulputate. Nulla ac mollis lorem, eu ullamcorper nunc. Nullam blandit dolor quis ullamcorper tristique. Pellentesque at cursus purus, eu efficitur sapien. Vestibulum at ligula congue, ultrices urna a, imperdiet odio. Fusce lorem magna, porta a nibh vel, bibendum pulvinar felis. Morbi eu viverra risus. Aliquam erat volutpat. Maecenas id odio gravida, fermentum turpis ut, blandit sapien. Mauris dictum in turpis vel lacinia. Phasellus feugiat neque sed nibh lacinia rutrum. Integer id enim orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus cursus ipsum vitae bibendum luctus. Aenean vestibulum ultricies ante tempus laoreet. Morbi sodales sapien a varius dignissim. Aliquam magna nisl, ultricies eu tincidunt ut, congue aliquam est. Curabitur tincidunt pellentesque nisi sit amet egestas. Suspendisse vel maximus sapien. Nunc enim nisl, commodo eu efficitur eu, placerat sit amet mi. Integer sodales pulvinar lectus, ut malesuada est ultricies at. Pellentesque ac sagittis libero. Nunc pretium velit a nulla porta ultricies ut ac tellus. Nulla vulputate fringilla ligula. Aliquam magna risus, efficitur vel molestie eget, facilisis id mi. Sed rutrum dapibus purus, quis venenatis risus viverra vitae. Duis consectetur maximus purus, et consequat augue blandit eu. Cras eu lorem eu neque gravida porta. Nulla facilisi. Nam quis rutrum sem. Fusce elementum, sem sit amet iaculis mattis, ligula ante mollis metus, vel ultrices mauris neque a neque. Mauris magna augue, scelerisque vel felis non, imperdiet feugiat ante. Donec sit amet justo purus. Nullam ac laoreet nisi. Aliquam aliquam ipsum mauris, at fringilla lectus blandit vitae. Integer semper mollis porta. Curabitur dui dui, aliquam ut rutrum quis, laoreet non turpis. Sed dui sapien, ultricies ut erat a, pharetra auctor elit. Morbi eu leo sem. Suspendisse commodo, quam eget ullamcorper accumsan, neque ex semper erat, vitae luctus dolor augue ac odio. Cras quis feugiat odio, eget porta ipsum. Vivamus varius nunc et neque fermentum, non lobortis nibh varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum est et orci tristique, et malesuada quam volutpat. Vivamus ultricies tincidunt nisl. Sed diam lorem, maximus vel augue ac, sagittis tempor leo. Phasellus ullamcorper metus sit amet massa dignissim semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas lorem nec nibh ultricies, nec facilisis ante aliquet. Nulla at metus sit amet purus elementum porta. Aenean condimentum dolor in velit eleifend dignissim. Aliquam non accumsan justo. Donec convallis felis tellus, rhoncus dapibus quam accumsan sit amet.
        </Typography> */}
      </Box>
    </>
  );
}

export default App;
