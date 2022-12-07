import React, { useState } from "react";
import Image from "next/image";

import { Content, Profile, ButtonMenu } from "./style";
import Navbar from "../navbar";
import Footer from "../footer";

const Sidebar: React.FC<SidebarProps> = () => {
  const [active, setActive] = useState("my-data");

  return (
    <>
      <Navbar />
      <Content>
        <Profile>
          <Image
            src='/avatar.svg'
            alt='avatar profile'
            width={96}
            height={96}
          />
          <span>Fulano</span>
        </Profile>

        <ButtonMenu active>
          <Image
            src='/icons/Person.svg'
            alt='icon user'
            width={20}
            height={20}
          />

          <span>Meus dados</span>
        </ButtonMenu>
        <ButtonMenu active={active === "address"}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.625 17.5H11.7609C12.411 16.9205 13.0242 16.3008 13.5966 15.6445C15.7413 13.178 16.875 10.5779 16.875 8.125C16.875 6.30164 16.1507 4.55295 14.8614 3.26364C13.572 1.97433 11.8234 1.25 10 1.25C8.17664 1.25 6.42795 1.97433 5.13864 3.26364C3.84933 4.55295 3.125 6.30164 3.125 8.125C3.125 10.5779 4.25865 13.178 6.40335 15.6445C6.97585 16.3008 7.58896 16.9205 8.23908 17.5H4.375C4.20924 17.5 4.05027 17.5658 3.93306 17.6831C3.81585 17.8003 3.75 17.9592 3.75 18.125C3.75 18.2908 3.81585 18.4497 3.93306 18.5669C4.05027 18.6842 4.20924 18.75 4.375 18.75H15.625C15.7908 18.75 15.9497 18.6842 16.0669 18.5669C16.1842 18.4497 16.25 18.2908 16.25 18.125C16.25 17.9592 16.1842 17.8003 16.0669 17.6831C15.9497 17.5658 15.7908 17.5 15.625 17.5ZM10 5.625C10.4945 5.625 10.9778 5.77162 11.3889 6.04633C11.8001 6.32103 12.1205 6.71148 12.3097 7.16829C12.4989 7.62511 12.5484 8.12777 12.452 8.61273C12.3555 9.09768 12.1174 9.54314 11.7678 9.89277C11.4182 10.2424 10.9727 10.4805 10.4877 10.577C10.0028 10.6734 9.50013 10.6239 9.04331 10.4347C8.5865 10.2455 8.19605 9.92505 7.92135 9.51393C7.64664 9.1028 7.50002 8.61945 7.50002 8.125C7.50002 7.79669 7.56468 7.4716 7.69031 7.16829C7.81595 6.86497 8.0001 6.58937 8.23225 6.35723C8.46439 6.12508 8.73999 5.94093 9.04331 5.81529C9.34662 5.68966 9.67171 5.625 10 5.625V5.625Z" fill="black"/>
</svg>


          <span>Endereços</span>
        </ButtonMenu>
        <ButtonMenu active={active === "plan"}>
          <Image src='/icons/Pen.svg' alt='icon user' width={20} height={20} />

          <span>Assinatura</span>
        </ButtonMenu>
      </Content>
      <Footer expanded={false} />
    </>
  );
};

export default Sidebar;
