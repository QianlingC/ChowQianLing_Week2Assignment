import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FormInput from "./FormInput";
import CardTem from "./CardTem";

class App extends Component {
  state = {
    personData: [],
  };

  //create a function inside parent component
  addData = (user) => {
    console.log(user); //add user inside personData(state)

    this.setState({
      personData: [...this.state.personData, user],
    });
  };

  render() {
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Navbar
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Contact</Button>
            </Toolbar>
          </AppBar>
        </Box>

        <FormInput addData={this.addData} />
        <CardTem personData={this.state.personData} />
      </>
    );
  }
}

export default App;
