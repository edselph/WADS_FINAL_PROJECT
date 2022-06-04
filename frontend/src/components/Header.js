import React, {useState} from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { FormControl, NavbarBrand } from "react-bootstrap";

const Header =  () => {
    const [value, setValue] = useState();
    return (
    <div>
        <AppBar sx={{ backgroundColor: "#100c09"}} position="sticky">
          <Toolbar>
              <Typography> 
                  <img src="https://i.ibb.co/zGZshwK/furnica.png" height="50px" width="50px" />    
                    </Typography>
                    <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val) => setValue(val)}>
                    <Tab label="Home" />
                    <Tab label="Products" />
                    <Tab label="Cart" />
                    </Tabs>
          </Toolbar>
      </AppBar>
    </div>
    );
};

export default Header;
