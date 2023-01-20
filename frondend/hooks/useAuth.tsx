import axios from "axios";
import React, { useState } from "react";
import { REGISTER_URL } from "../constant/urls";
import { RegisterType, ErrorType } from "../types";

const useAuth = () => {
  const [errorsMessage, setErrorsMessage] = useState<ErrorType>();
  const registerFunc = async (registerInfo: RegisterType) => {
    try {
      const { data } = await axios.post(REGISTER_URL, registerInfo);
      console.log(data);
    } catch (error: any) {
      setErrorsMessage(error.response.data);
      // console.log(error);
    }
  };
  return { errorsMessage, registerFunc };
};

export default useAuth;
