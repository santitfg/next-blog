
import Head from 'next/head';
import Navbar from './navbar';

export default function Post({ content, data }) {
    return (
        <><Head>
        <title>{data.title}</title>
      </Head>
      <Navbar></Navbar>
      <article>
        Written by {data.author} on {data.date}
        <section>{content}</section>
      </article>
      </>
    );
  }