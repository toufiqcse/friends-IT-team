import Homes from "@/components/Home/HomePage/Home/Homes";
import Meta from "@/components/Meta";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const IndexPage = ({ data }) => {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <Toaster />
      <Homes />
    </>
  );
};

// export const getServerSideProps = async (ctx) => {
//   const res = await fetch("http://localhost:3000/api/members");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

export default IndexPage;
