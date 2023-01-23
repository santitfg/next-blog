import React from "react";
import Layout from "../../components/layout";
import Head from 'next/head'

export default function FirstPost() {
  return <>
       <Head>
        <title >Primer Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Layout>
  <h1>Primer Post</h1>
  </Layout>
  </>
}