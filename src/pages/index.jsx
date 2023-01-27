import Layout from "components/layout";
import Link from "next/link";
import CarouselParent from "@/components/carouselparent"
import { Children } from "react";

function RowList({ children }) {
  return (
    <div className="RowList">
      {Children.map(children, (child, index) => {
        return (
          <div className="Row">
            {index}
            {child}
          </div>
        );
      })}
    </div>
  );
}

function Parent({ children }) {
  // children.className=" text-5xl";
  return <div className="mt-10 bg-orange-500">{children}</div>;
}

const NotFound = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center p-1/6">
          <div className="mt-4 unreset w-11/12 md:w-3/4 text-center text-5xl">
            aca va la bio
            <div className="w-1/3 ">

            <CarouselParent>
            <img src='/imgs/micrones/04.jpg' className="w-full object-contain" />
            <img src='/imgs/micrones/05.jpg' className="w-full object-contain" />
            <img src='/imgs/micrones/06.jpg' className="w-full object-contain" />
            <img src='/imgs/micrones/14.jpg' className="w-full object-contain" />
            <img src='/imgs/micrones/07.jpg' className="w-full object-contain" />

            </CarouselParent>
            </div>

            <br />
            <Link href="/haceres">obras</Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
