import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FilledButton } from "../buttons/FilledButton";
import { LineButton } from "../buttons/LineButton";

import { Actions, Container, LeftContent } from "./styles";

const Navbar: React.FC = () => {
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
        <LineButton>Entrar</LineButton>
        <Link href="/signature">
          <FilledButton>Assinar Agora</FilledButton>
        </Link>
      </Actions>
    </Container>
  );
};

export default Navbar;
