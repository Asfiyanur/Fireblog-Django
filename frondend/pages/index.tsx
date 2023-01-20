import type { NextPage } from "next";
import Head from "next/head";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Anasayfa</title>
        <link rel="icon" href="/favicon.ico" />
        <h1>anasayfa</h1>
        <Link href="./register">Register 'a git</Link>
      </Head>
    </div>
  );
};

export default Home;
