"use client";
import { ChangeEvent, useState } from "react";

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

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormResend({ ...formResend, [name]: value });
  };

  return { formResend, handleChangeInput };
};
