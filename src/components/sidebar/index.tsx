import React, { useState } from "react";
import Image from "next/image";

import { Content, Profile, ButtonMenu } from "./style";
import Navbar from "../navbar";
import Footer from "../footer";
import { useProfileMenuData } from "../../stores/profileMenuData";

const Sidebar: React.FC<SidebarProps> = () => {
  const {activeMenu,setActiveMenu} = useProfileMenuData(({activeMenu,setActiveMenu}) => ({activeMenu,setActiveMenu}));


  return (
    <>
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

        <ButtonMenu active={activeMenu === "my-data"} onClick={()=> setActiveMenu('my-data')}>
          <Image
            src='/icons/Person.svg'
            alt='icon user'
            width={20}
            height={20}
          />

          <span>Meus dados</span>
        </ButtonMenu>
        <ButtonMenu active={activeMenu === "address"} onClick={()=> setActiveMenu('address')}>
          <Image
            src='/icons/MapPinLine.svg'
            alt='icon user'
            width={20}
            height={20}
          />

          <span>Endereços</span>
        </ButtonMenu>
        <ButtonMenu active={activeMenu === "plan"} onClick={()=> setActiveMenu('plan')}>
          <Image src='/icons/Pen.svg' alt='icon user' width={20} height={20} />

          <span>Assinatura</span>
        </ButtonMenu>
      </Content>
    </>
  );
};

export default Sidebar;
