import React from "react";

import { GoogleButtonContainer } from "./styles";

import Image from "next/image";

interface GoogleButtonContainer extends HTMLButtonElement {
  width: string;
}

export const SocialButton: React.FC<GoogleButtonContainer> = ({
  width,
  children,
}) => {
  return (
    <GoogleButtonContainer width={width}>
      <div className="icon">
        <Image
          src={"/icon-google.svg"}
          width={20}
          height={20}
          style={{
            backgroundColor: "#0055FF",
            borderRadius: "20px",
          }}
        ></Image>
      </div>
      {children}
    </GoogleButtonContainer>
  );
};
