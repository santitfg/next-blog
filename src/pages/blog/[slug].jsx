import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navbar from "@/components/navbar";
import Image from "next/image";

import Head from "next/head";
// import Link from "next/link";
// import styles from '../styles/Home.module.css';
import Layout from "@/components/layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import Youtube from "@/components/youtube";

//  por temas de tiempo y sin necesidad de reinventar la rueda utilizo el codigo de Ebenezer Don
//  https://blog.jetbrains.com/webstorm/2021/10/building-a-blog-with-next-js-and-mdx/#Adding_MDX_files_for_our_posts

const components = { Navbar, SyntaxHighlighter, Image, Youtube };

const PostPage = ({
  frontMatter: { title, date, description, thumbnailUrl },
  mdxSource,
}) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* el meta img no creo que funcione */}
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_HOST + thumbnailUrl}
        />
      </Head>
      <div className="flex justify-center">
        <div className="mt-4 unreset w-11/12 md:w-3/4">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </div>
    </Layout>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src/posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
