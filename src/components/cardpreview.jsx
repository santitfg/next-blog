// import { StaticImage } from "gatsby-plugin-image";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const CardPreview = (props) => {
  const { data } = props;

  return (
    <div className="relative inline-block rounded-none md:rounded-3xl  aspect-video ">
      <Link href={"/blog/" + data.slug}>
        {/*animacion-tarjeta  md:gradiente-mobile md:gradiente-principal */}
        <div className="absolute z-10 inset-0  w-full h-full animacion-tarjeta rounded-none md:rounded-3xl gradiente-principal flex justify-center  items-center">
          <div className="  text-xl  text-col-txt text-justify font-bold m-14  ">
            {data.frontMatter.title}
          </div>
        </div>
        <div className="relative w-full h-full rounded-none md:rounded-3xl">
        <Image
          className="object-cover rounded-none md:rounded-3xl  "
          src={data.frontMatter.thumbnailUrl}
          alt={data.frontMatter.title}
          fill
        />
        </div> 
      </Link>
    </div>
  );
};

export default CardPreview;
