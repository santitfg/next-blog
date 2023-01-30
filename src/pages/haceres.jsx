import Head from "next/head";

import Layout from "components/layout";
import CardPreview from "components/cardpreview";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Haceres = ({ posts }) => {

  posts.sort((a, b) => {
    let da = new Date(a.frontMatter.date),
        db = new Date(b.frontMatter.date);
    return db - da ;
});

  return (
    <>
             <Head>
        <title>"Portfolio de Santiago fernandez"</title>
        <meta name="description" content={"artista visual, programador e ilustrador"} />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_HOST +"/imgs/hydra-2022-9-5-0.10.3.jpg" }
        />
      </Head>
      <Layout>
        <main className="max-w-[100%] md:max-w-[75%]  mx-auto text-justify">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-1 md:gap-4 ">
            {posts.map((post, index) => (
              <CardPreview data={post} key={post.slug} />
            ))}
          </div>
        </main>
      </Layout>
    </>
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

export default Haceres;
