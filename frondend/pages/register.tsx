import Head from "next/head";
import React from "react";

type Props = {};

const register = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>

      <div className="flex justify-center items-center h-screen">
        <form className="flex flex-col p-6 gap-6">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Password Again" />
        </form>
      </div>
    </div>
  );
};

export default register;

// tsrafce !!!
