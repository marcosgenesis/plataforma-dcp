import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Container } from "./styles";

interface Footer {
  expanded: boolean;
}

const Footer: React.FC<Footer> = ({ expanded = false }) => {
  return (
    <Container>
      {expanded && (
        <div className='expandedLinks'>
          <div className='section'>
            <p>Institucional</p>
            <ul>
              <li>
                <Link href='#'>Equipe</Link>
              </li>
              <li>
                <Link href='#'>Política de Privacidade</Link>
              </li>
              <li>
                <Link href='#'>Pagamento e Envio</Link>
              </li>
            </ul>
          </div>
          <div className='section'>
            <p>Ajuda</p>
            <ul>
              <li>
                <Link href='#'>Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link href='#'>Fale Conosco</Link>
              </li>
              <li>
                <Link href='#'>Central de Suporte</Link>
              </li>
            </ul>
          </div>
          <div className='section'>
            <p>Atendimento</p>
            <ul>
              <li>
                <Link href='#'>Email</Link>
              </li>
              <li>
                <Link href='#'>Telefone</Link>
              </li>
              <li>
                <Link href='#'>Social</Link>
              </li>
            </ul>
          </div>
          <div className='section'>
            <p>Atendimento</p>
            <ul>
              <li>
                <Link href='#'>Email</Link>
              </li>
              <li>
                <Link href='#'>Telefone</Link>
              </li>
              <li>
                <Link href='#'>Social</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className='miniFooter'>
        <p>Copyright Trama Criativa 2022</p>
        <div className='links'>
          <Image src='/icons/insta.svg' alt='Insta' width={16} height={16} />
          <Image src='/icons/insta.svg' alt='Insta' width={16} height={16} />
          <Image src='/icons/insta.svg' alt='Insta' width={16} height={16} />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
