import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import {Menu as MenuIcon} from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Input from '@mui/material/Input';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Collapse from '@mui/material/Collapse';
export default function TopBar({handleTopClick}){
  const[visible, setVisible] = useState(false);
  const handleClick =() =>{
setVisible(visible=>!visible);
  }

    return (
       <Box sx={{display:'flex' }}>
      <CssBaseline />
        <AppBar  sx={{borderRadius:2}}>
          <Toolbar sx={{justifyContent:'space-between'}}>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton onClick={handleTopClick}>
              <MenuIcon />
            </IconButton>
            <Typography component ="h1" variant="h5" sx={{ml:2 }} noWrap>Amazing Store</Typography>
            </Box>
            <Box sx={{display:'flex',  alignItems:'center', justifyContent:'flex-end'}}>
            <Collapse orientation="horizontal" in={visible}   timeout={1000}  > 
            <Input size="small"  disableUnderline sx={{backgroundColor:'white', pl:2, width:250, borderRadius:5}}></Input>
            </Collapse>
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
              </Box>
              </Toolbar>

        </AppBar>
       </Box>
    )
}