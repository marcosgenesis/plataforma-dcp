import React from "react";
import Image from "next/image";

import {Content, Profile, ButtonMenu} from './style'
import Navbar from "../navbar";
import Footer from "../footer";

const Sidebar: React.FC = () => {
  return (
    <>
      <Navbar />
      <Content>
        <Profile> 
          <Image 
            src='/avatar.svg' 
            alt="avatar profile" 
            width={96}
            height={96}
          />
          <span>Fulano</span>
        </Profile>

        <ButtonMenu>
          <Image 
              src='/icons/Person.svg' 
              alt="icon user" 
              width={20}
              height={20}
            />

          <span>Meus dados</span>
        </ButtonMenu>
        <ButtonMenu>
          <Image 
              src='/icons/MapPinLine.svg' 
              alt="icon user" 
              width={20}
              height={20}
            />

          <span>Endereços</span>
        </ButtonMenu>
        <ButtonMenu>
          <Image 
              src='/icons/Pen.svg' 
              alt="icon user" 
              width={20}
              height={20}
            />

          <span>Assinatura</span>
        </ButtonMenu>
      </Content>
      <Footer expanded />
    </>
  )
}

export default Sidebar