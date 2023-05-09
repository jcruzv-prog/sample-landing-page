import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function Authenticated(){
    return(
<>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Landing on Next Material</title>
      </Head>
      <CssBaseline />
      <Container component="main" maxwidth="md"
        sx={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >

          <Typography component="h1" variant='h4'sx={{mt:2}} >
          Simple Landing on Next Js and Material
          </Typography>

          <Typography component="h2" variant='h5'sx={{mt:2}} >
          Welcome user!
          </Typography>

      </Container>
</>        
    )
}