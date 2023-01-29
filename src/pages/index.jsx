import Layout from "components/layout";
import Link from "next/link";
import Carousel from "@/components/carousel"
import { Children } from "react";

const images = ['/imgs/micrones/04.jpg', '/imgs/micrones/05.jpg',
   '/imgs/micrones/06.jpg','/imgs/micrones/07.jpg','/imgs/micrones/10.jpg','/imgs/micrones/12.jpg',
   '/imgs/micrones/14.jpg',];


const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center p-1/6">
          <div className="mt-4 unreset w-11/12 md:w-3/4 text-center text-5xl">
            aca va la bio
           <Carousel images={images} />
            <br />
            <Link href="/haceres">obras</Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
