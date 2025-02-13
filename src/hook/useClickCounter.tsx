import { useState, useEffect } from "react";
import { sendEmail } from "../utils/sendEmail";

interface Props {
  maxClicks: number;
  to_email: string;
  message?: string | null;
  fromName: string;
  toName: string;
  setShowShare: (showShare: boolean) => void;
}

const useClickCounter = ({ maxClicks, to_email, fromName, toName, setShowShare }: Props) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count === maxClicks) {
      sendEmail(to_email, "Lo siento, rechazaron tu propuesta", fromName, toName);
    }
    if (count === maxClicks) {
      setShowShare(true);
    }
  }, [count, maxClicks, to_email, fromName, toName]);

  const increment = () => {
    if (count < maxClicks) {
      setCount(count + 1);
    }
  };

  return { count, increment };
};

export default useClickCounter;
