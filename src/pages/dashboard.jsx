
import Head from 'next/head'; 
import {data }from '../../lib/data';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Layout from '../../components/layout';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CardMedia from '@mui/material/CardMedia';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Grid from '@mui/material/Grid';
export default function DashBoard(){

  return( 
    <Layout >
    <Grid container   direction={"row"} columnSpacing={0} rowSpacing={2} justifyContent="space-around" alignItems="center" sx={{mt:3}}>
    <Grid item  xs={12} sm={5} xl={3} justifyContent="center" alignItems="center" >
    <Card elevation={4} >
      <CardHeader title='Highly Rated' avatar={
        <Avatar sx={{backgroundColor:'gold'}}>
          <StarsIcon />
        </Avatar>
      }>
      </CardHeader>
      <CardMedia component="img" image='/laptop.jpg' alt="High rated product"  ></CardMedia>
    </Card>
    </Grid>
    <Grid item xs={12} sm={5} xl={3}>
    <Card elevation={4} >
      <CardHeader title='Shop Deals' avatar={
        <Avatar sx={{backgroundColor:'#1B9C85'}}>
          <LocalOfferIcon />
        </Avatar>
      }></CardHeader>
      <CardMedia component="img" image='/deals.jpg'  alt="Shop Deal"></CardMedia>
    </Card>
    </Grid>
    <Grid item xs={12} sm={5} xl={3}>
    <Card elevation={4} >
      <CardHeader title='Best Sellers' avatar={
        <Avatar sx={{backgroundColor:'#FF6969'}}>
          <TrendingUpIcon/>
        </Avatar>
      }></CardHeader>
      <CardMedia component="img" image='/best_sell.jpg'  alt="Shop Deal"></CardMedia>
    </Card>
    </Grid>
    </Grid>
    <Box sx={{mt:10, display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Card elevation={4}>
        <CardHeader title="Sales Income" avatar={
          <Avatar sx={{backgroundColor:'#19A7CE'}}>
            <AssessmentIcon />
          </Avatar>
        }>

        </CardHeader>
        <LineChart 
        width={600}
        height={300}
        data={data}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="laptop" stroke="#0A4D68" strokeWidth={3} />
          <Line type="monotone" dataKey="accessories" stroke="#FF6969" strokeWidth={3}/>
          <Line type="monotone" dataKey="monitors" stroke="#0B2447" strokeWidth={3}/>
        </LineChart>
      </Card>
    </Box>
    </Layout>
  )
}

