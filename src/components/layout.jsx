import React from "react";

// import Navbar from "./navbar";

// const Layout = (props) => {
//   return (
//     <>
//     <header>
//       {/* <Navbar /> */}
//       <Link  href="/">index</Link>
//       <Link  href="/posts/primer-post">primer post</Link>
//       <Link href="/my-mdx-page">mdx test</Link>
//       <Link href="/probando">md test</Link>
//     </header>
//       <main >

//       {props.children}
//       </main>
//     </>
//   );
// };
// export default Layout;



import Navbar from "./navbar";
const Layout = (props) => {
  return (
    <>
    <header><Navbar />

    </header>
    <div className="p-5"></div>
      {/* <h1 className="bg-[#1da1f2] text-white"> {props.titulo}</h1> */}

      {props.children}
      
      <footer  className="container mx-auto text-justify" >
      <div className="p-4"></div>

      <hr className="border-solid border-top-2 border-principal "/>

      <div className="p-6"></div>
      </footer>
    </>
  );
};


export default Layout;
