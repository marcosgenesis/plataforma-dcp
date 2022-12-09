import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAuth } from "../../contexts/auth";
import { FilledButton } from "../buttons/FilledButton";
import { LineButton } from "../buttons/LineButton";

import { Actions, Container, LeftContent, LoggedArea, LogoutButton } from "./styles";

const Navbar: React.FC = () => {
  const { user,logout } = useAuth();

  return (
    <Container>
      <LeftContent>
        <Image src='/logo-blue.svg' height='24' width='74' alt='logo azul' />
        <ul>
          <li>
            <Link href='/'>Benefícios</Link>
          </li>
          <li>
            <Link href='/'>O que vem</Link>
          </li>
          <li>
            <Link href='/'>Como funciona</Link>
          </li>
          <li>
            <Link href='/'>Planos</Link>
          </li>
          <li>
            <Link href='/'>Tramas Anteriores</Link>
          </li>
        </ul>
      </LeftContent>
      <Actions>
        {!!user ? (
          <LoggedArea>
            <LogoutButton onClick={()=>logout()}>Sair</LogoutButton>
            <Link href='/my-data'>
              <Image
                src='/Avatar.svg'
                alt='Avatar profile'
                width={32}
                height={32}
              />
            </Link>
          </LoggedArea>
        ) : (
          <Link href='/authentication'>
            <LineButton>Entrar</LineButton>
          </Link>
        )}
        {!user && (
          <Link href='/signature'>
            <FilledButton>Assinar Agora</FilledButton>
          </Link>
        )}
      </Actions>
    </Container>
  );
};

export default Navbar;
