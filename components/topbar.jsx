import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import {Menu as MenuIcon} from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Input from '@mui/material/Input';
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
export default function TopBar(){
  const[visible, setVisible] = useState(false);
  const handleClick =() =>{
setVisible(visible=>!visible);
  }
    return (
       <Box sx={{display:'flex' }}>
      <CssBaseline />
        <AppBar position='static' sx={{borderRadius:2}}>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography component ="h1" variant="h5" sx={{ml:2, flexGrow:1}} noWrap>Amazing Store Products</Typography>
            {visible && <Input  variant="standard" size="medium" disableUnderline sx={{backgroundColor:'whitesmoke', borderRadius:5, pl:2}} />}
            <IconButton size="large" color="inherit" onClick={handleClick}>
            <SearchIcon />
            </IconButton>
            
            <IconButton size="large" color="inherit">
              <DarkModeIcon />
            </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </Toolbar>

        </AppBar>
       </Box>
    )
}