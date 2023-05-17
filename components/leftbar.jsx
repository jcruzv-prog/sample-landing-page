import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import  AddBusinessIcon  from '@mui/icons-material/AddBusiness';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCardIcon from '@mui/icons-material/AddCard';
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
        <List sx={{display:'flex',flexShrink:1, flexDirection:'column', backgroundColor:'#004e67', ml:1, pl:1, height:'100%'}}>
            <ListItem  disablePadding>
              <ListItemAvatar >
                <Avatar sx={{bgcolor:'primary.main'}} >
                 <AccountCircle />
                </Avatar>
                </ListItemAvatar>
               <ListSubMenuHeader component="h4" disableGutters sx={{ backgroundColor:'#004e67', color:'#e0f2f1', mt:1, mb:1}}>Account Settings</ListSubMenuHeader>
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
            <Divider sx={{backgroundColor:'white', mb:3}}/>
            <ListItem  disablePadding>
              <ListItemAvatar >
                <Avatar sx={{bgcolor:'primary.main'}} >
                 <AddBusinessIcon/>
                </Avatar>
                </ListItemAvatar>
               <ListSubMenuHeader component="h4" disableGutters sx={{fontSize:'1.5em', backgroundColor:'#004e67', color:'#e0f2f1', mt:1, mb:1}}>Store Settings</ListSubMenuHeader>
            </ListItem>
            <Divider sx={{backgroundColor:'white'}}/>
            <ListItem>
            <ListItemButton component='a' >
                <ListItemIcon >
                    <AccountBalanceWalletIcon sx={{color:'primary.main'}}/>
                </ListItemIcon>
                <ListItemText sx={{color:'white'}}>Manage Balance</ListItemText>
            </ListItemButton>    
            </ListItem>           
            <ListItem>
            <ListItemButton component='a' >
                <ListItemIcon >
                    <AddCardIcon sx={{color:'primary.main'}}/>
                </ListItemIcon>
                <ListItemText sx={{color:'white'}}>Add Credit Card</ListItemText>
            </ListItemButton>    
            </ListItem>           
            <Divider sx={{backgroundColor:'white'}}/>
        </List>
    )
}