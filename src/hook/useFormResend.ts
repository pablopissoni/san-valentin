"use client";
import { useState } from "react";

interface FormResend {
  message: string;
  fromUser: string;
  toUser: string;
  email: string;
}

export const useFormResend = () => {
  const [formResend, setFormResend] = useState<FormResend>({
    message: "",
    fromUser: "",
    toUser: "",
    email: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormResend({ ...formResend, [name]: value });
  };

  return { formResend, handleChangeInput };
};
