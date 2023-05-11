import Head from 'next/head'; 
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { AppBar , Toolbar, IconButton} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import TopBar from './topbar'; 
export default function Layout({children}){

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
       <title>Dashboard</title> 
      </Head>
<TopBar />
<Container>
{children}
</Container>
</>
  )
}
