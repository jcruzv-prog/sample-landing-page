import {Grid, Card, CardHeader, Avatar} from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {data }from '../lib/data';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAElwg1iJK0SrIj3UAfXr1wzCahaq1AGF4",

  authDomain: "sample-landing-page-82a2c.firebaseapp.com",

  projectId: "sample-landing-page-82a2c",

  storageBucket: "sample-landing-page-82a2c.appspot.com",

  messagingSenderId: "457547769095",

  appId: "1:457547769095:web:bbd63a382958d21d4f11a2",

  measurementId: "G-PB0MKZ9K9S"

};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const docRefJanuary = doc(db, "sales", "january");
const docRefFebruary = doc(db, "sales", "february");
const docRefMarch = doc(db, "sales", "march");
const docRefApril = doc(db, "sales", "april");
    export default  function Chart(){
      
      const[salesData, setSalesData] = useState(null);  
        Promise.all([
        getDoc(docRefJanuary),
        getDoc(docRefFebruary),
        getDoc(docRefMarch),
        getDoc(docRefApril)
        ]).then(salesArray=>setSalesData(salesArray))
        return(
       
        <>
        {salesData?     
    <Grid container alignItems={'center'} justifyContent="center" sx={{mt:10}}>
    <Grid item xs={12}  md={11} justifyContent="center">
              <Card elevation={4} >
        <CardHeader title="Sales Income" avatar={
          <Avatar sx={{backgroundColor:'#19A7CE'}}>
            <AssessmentIcon />
          </Avatar>
        }>

        </CardHeader>
        <ResponsiveContainer width={"100%"} height={600}>
        <LineChart 
        width={"800px"}
        height={"300px"}
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
        </ResponsiveContainer>
      </Card>
      </Grid>
    </Grid>
    :
    <span>Loading Data...</span>
    }
    </>
       
        )
    }