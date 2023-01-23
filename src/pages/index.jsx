import Head from "next/head";
import Link from "next/link";

// import styles from '../styles/Home.module.css';
import Layout from "components/layout";
import CardPreview from "components/cardpreview";
import Image from "next/image";
import fs from "fs";
import Button from "@/components/button";
import path from "path";
import matter from "gray-matter";

const Home = ({ posts }) => {
  return (
    <>
      <Layout>
      <main className="max-w-[100%] md:max-w-[75%]  mx-auto text-justify">
        {/* x grid o por flex?? de ser grid el ultimo elem impar? */}
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-1 md:gap-4 ">
          {posts.map((post, index) => (
            <CardPreview data={post} key={post.slug} />
            // <Link href={"/blog/" + post.slug} passHref key={index}>
            //   <div className="card mb-3 pointer" >
            //     <div className="row g-0">
            //       <div className="col-md-8">
            //         <div className="card-body">
            //           <h5 className="card-title">{post.frontMatter.title}</h5>
            //           <p className="card-text">
            //             {post.frontMatter.description}
            //           </p>
            //           <p className="card-text">
            //             <small className="text-muted">
            //               {post.frontMatter.date}
            //             </small>
            //           </p>
            //         </div>
            //       </div>
            //       <div className="col-md-4 m-auto">
            //         <Image
            //           src={post.frontMatter.thumbnailUrl}
            //           className="img-fluid mt-1 rounded-start"
            //           alt="thumbnail"
            //           width={500}
            //           height={400}
            //           objectFit="cover"
            //         />
            //       </div>
            //     </div>
            //   </div>
            // </Link>
          ))}
        </div>
      </main>
            </Layout>
    </>
    //     <>
    //       <Head>
    //         <title >Create Next App</title>
    //         <link rel="icon" href="/favicon.ico" />
    //       </Head>
    //     <Layout>
    //     <Button />
    //       <main>
    //       <h1 className="text-3xl font-bold underline bg-[#1da1f2]" >index</h1>
    //       <Image
    //     src="/imgs/gitlab.png" // Route of the image file
    //     height={144} // Desired size with correct aspect ratio
    //     width={144} // Desired size with correct aspect ratio
    //     alt="gitlab logo"
    //   />
    //    <Image
    //   src="/imgs/Instagram_Glyph_Gradient.png" // Route of the image file
    //   height={144} // Desired size with correct aspect ratio
    //   width={144} // Desired size with correct aspect ratio
    //   alt="instagram logo"
    // />
    //    <Image
    //     src="/imgs/github-mark.svg" // Route of the image file
    //     height={144} // Desired size with correct aspect ratio
    //     width={144} // Desired size with correct aspect ratio
    //     alt="github logo"
    //   />
    //       </main>
    //       </Layout>

    //     </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
