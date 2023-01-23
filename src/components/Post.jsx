
import Head from 'next/head';

export default function Post({ content, data }) {
    return (
        <><Head>
        <title>{data.title}</title>
      </Head>
      <article>
        Written by {data.author} on {data.date}
        <section>{content}</section>
      </article>
      </>
    );
  }