import axios from "axios";
import React from "react";
import { REGISTER_URL } from "../constant/urls";
import { RegisterType } from "../types";

type Props = {};

const useAuth = () => {
  const registerFunc = async (registerInfo: RegisterType) => {
    try {
      const { data } = await axios.post(REGISTER_URL, registerInfo);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return { registerFunc };
};

export default useAuth;
