import React from 'react'
import Head from 'next/head';
import MenuForm from '@/components/form';

const Home = () => {
  return (
    <>
    <Head>
      <title>Market MaxkyoTHo</title>
      <meta name='keyword' content='MaxkyoTHo,E-Commerce,Shopping'></meta>
    </Head>
      <div>
          <MenuForm />
      </div>
    </>
  )
}
export default Home;