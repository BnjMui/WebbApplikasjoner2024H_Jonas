import { useState } from "react";
import { TitleProps } from "../types";
export default function Title(props: TitleProps) {
  const [userName, setUserName] = useState("En ny tittel");
  const { title = "Default title" } = props;

  const changeUserName = () => {
    setUserName("Endret tittel");
  };
  return (
    <>
      <h2>{title}</h2>
      <p>{userName}</p>
    </>
  );
}
