import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import {Menu as MenuIcon} from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
export default function TopBar(){
    return (
       <Box sx={{display:'flex' }}>
        <AppBar position='static' sx={{borderRadius:2}}>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" sx={{ml:2, flexGrow:1}} noWrap>Amazing Store Products</Typography>
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