import React, {useState} from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import { NavLink } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

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
                      <Tab LinkComponent={NavLink} to="/" label="Home" />
                      <Tab LinkComponent={NavLink} to="/Products" label="Products" />
                      <Tab LinkComponent={NavLink} to="/Cart" label="Cart" /> 
                      <Tab LinkComponent={NavLink} to="/Signup" label="Sign Up" />
                      <Tab LinkComponent={NavLink} to="/Testing" label="Testing" />
                    </Tabs>
          </Toolbar>
      </AppBar>
    </div>
    );
};

export default Header;
