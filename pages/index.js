import Head from 'next/head';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Layout from '../components/layout';
export default function Home(){
  return(
<Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Landing on Next Material</title>
      </Head>
        <h1>Simple Landing on Next Js and Material</h1>
      <Button variant='contained'>Material Click</Button>
    </Layout>
  );
}
