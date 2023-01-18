import Head from "next/head";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { RegisterType } from "../types";

type Props = {};

const register = (props: Props) => {
  const [registerInfo, setRegisterInfo] = useState();
  const { registerFunc } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>();

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    await registerFunc(data);
  };

  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>

      <div className="flex justify-center items-center h-screen">
        <form
          className="flex flex-col p-6 gap-6"
          onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors.username && <p>Girmek zorunludur</p>}
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>Girmek zorunludur</p>}
          <input
            type="text"
            placeholder="First Name"
            {...register("first_name")}
          />

          <input
            type="text"
            placeholder="Last Name"
            {...register("last_name")}
          />
          <input
            type="text"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>Girmek zorunludur</p>}
          <input
            type="text"
            placeholder="Password Again"
            {...register("password2", { required: true })}
          />
          <button>register</button>
        </form>
      </div>
    </div>
  );
};

export default register;

// tsrafce !!!
