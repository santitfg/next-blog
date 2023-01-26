import Layout from "components/layout";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center p-1/6">
          <div className="mt-4 unreset w-11/12 md:w-3/4 text-center text-5xl">
            aca va la bio
            <br />
            <Link href="/haceres">obras</Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
