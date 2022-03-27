//libraries
import Head from "next/head";
import type { NextPage } from "next";

//component
import Landing from "../component/landing/Landing";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>غزال شاهوار</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Landing />
      </div>
    </div>
  );
};

export default IndexPage;
