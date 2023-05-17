import Head from 'next/head'; 
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { AppBar , Toolbar, IconButton} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import TopBar from './topbar'; 
import LeftBar from './leftbar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
export default function Layout({children}){

  return (
    <>
     <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
       <title>Dashboard</title> 
      </Head>
      </div>
      <Grid container spacing={1} rowSpacing={6}>
      <Grid item xs={12}>
<TopBar />
</Grid>
<Grid item xs={4}  >
<LeftBar />
</Grid>
<Grid item xs={8} md={8}>
{children}
</Grid>
</Grid>
</>
  )
}
