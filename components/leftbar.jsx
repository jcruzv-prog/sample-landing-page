import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
import { ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ListSubMenuHeader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import MailBoxIcon from '@mui/icons-material/Mail';
import LockResetIcon from '@mui/icons-material/LockReset';
export default function LeftBar(){
    return(
        <Box sx={{display:'flex', backgroundColor:'#004e67', ml:0, mt:0.5, borderRadius:2, pt:2, height:'100vh', width:'400px'}}>
        <List sx={{display:'flex', flexDirection:'column', width:'100%',ml:1}}>
            <ListItem  disablePadding>
              <ListItemAvatar >
                <Avatar sx={{bgcolor:'primary.main'}} >
                 <AccountCircle />
                </Avatar>
                </ListItemAvatar>
               <ListSubMenuHeader component="h4" disableGutters sx={{fontSize:'1.5em', backgroundColor:'#004e67', color:'#e0f2f1', mt:1, mb:1}}>Account Settings</ListSubMenuHeader>
            </ListItem>
            <Divider sx={{backgroundColor:'white'}}/>
            <ListItem>
            <ListItemButton component='a' >
                <ListItemIcon >
                    <MailBoxIcon sx={{color:'primary.main'}}/>
                </ListItemIcon>
                <ListItemText sx={{color:'white'}}>Change Email</ListItemText>
            </ListItemButton>    
            </ListItem>          
            <ListItem>
            <ListItemButton component='a' >
                <ListItemIcon >
                    <LockResetIcon sx={{color:'primary.main'}}/>
                </ListItemIcon>
                <ListItemText sx={{color:'white'}}>Reset Password</ListItemText>
            </ListItemButton>    
            </ListItem>           
        </List>
        </Box>
    )
}