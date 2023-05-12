import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from './listitem';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
export default function LeftBar(){
    return(
        <Box sx={{display:'flex', backgroundColor:'#004e67', ml:0, mt:0.5, borderRadius:2, p:2, height:'100vh'}}>
        <List >
            <ListItem sx={{flexGrow:1}}>
              <HomeIcon />
              <Typography sx={{color:'white', pl:2, fontSize:20}}>Home</Typography>
            </ListItem>
            <ListItem>
              <HomeIcon />
            </ListItem>
        </List>
        </Box>
    )
}