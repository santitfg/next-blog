import Head from 'next/head'
// import styles from '../styles/Home.module.css';
import Layout from 'components/layout';
import Image from 'next/image';

import Button from '@/components/button';

export default function Home() {
  return (
    <>
      <Head>
        <title >Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
    <Button />
      <main>
      <h1 className="text-3xl font-bold underline bg-[#1da1f2]" >index</h1>
      <Image
    src="/imgs/gitlab.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="gitlab logo"
  />
   <Image
  src="/imgs/Instagram_Glyph_Gradient.png" // Route of the image file
  height={144} // Desired size with correct aspect ratio
  width={144} // Desired size with correct aspect ratio
  alt="instagram logo"
/>
   <Image
    src="/imgs/github-mark.svg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="github logo"
  />
      </main>
      </Layout>
     
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}