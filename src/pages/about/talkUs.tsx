import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Input from "../../components/input";
import { Breadcrumbs, Crumb } from "../../components/breadcrumb/styles";
import {
  TalkContainer,
  TalkMain,
  TalkContact,
  ContactCard,
  ContactIcon,
} from "../../styles/about/talkUs";
import { FilledButton } from "../../components/buttons/FilledButton";
import Footer from "../../components/footer";

const TalkUs: NextPage = () => {
  return (
    <div>
      {/* NavBar */}
      <Navbar />

      {/* Breadcrumb */}
      <Breadcrumbs>
        <Crumb>
          <a href="#">Home</a>
        </Crumb>
        <Crumb>Fale conosco</Crumb>
      </Breadcrumbs>

      {/* TalkContainer */}
      <TalkContainer>
        <h5>Fale conosco</h5>
      </TalkContainer>

      {/* TalkMain */}
      <TalkMain>
        <div className="talk-img">
          <Image src="/woman-sit-cat.svg" width={535} height={337} />
        </div>
        <div className="talk-form">
          <div className="talk-title">
            <h5>Envie uma mensagem pra gente!</h5>
            <p>
              Tem alguma dúvida, sugestão ou precisa de ajuda? Fale conosco!
            </p>
          </div>
          <div className="talk-input">
            <div>
              <Input label="Email" />
            </div>
            <div className="talk-inline">
              <Input label="Sua mensagem" height="124px" />
            </div>
            <div className="talk-inline">
              <FilledButton width="535px">Enviar</FilledButton>
            </div>
          </div>
        </div>
      </TalkMain>

      {/* ContactCard */}
      <TalkContact>
        <p className="talk-title">Outros contatos</p>
        <div>
          <ContactCard>
            <p className="contact-type">E-mail</p>
            <ContactIcon>
              <Image src="/letter.svg" width={24} height={24} />
              <p className="contact-content">tramacriativa@gmail.com</p>
            </ContactIcon>
          </ContactCard>
          <ContactCard>
            <p className="contact-type">Telefone I</p>
            <ContactIcon>
              <Image src="/phone.svg" width={24} height={24} />
              <p className="contact-content">+00 (xx) xxxx-xxxx</p>
            </ContactIcon>
          </ContactCard>
          <ContactCard>
            <p className="contact-type">Telefone II</p>
            <ContactIcon>
              <Image src="/phone.svg" width={24} height={24} />
              <p className="contact-content">+00 (xx) xxxx-xxxx</p>
            </ContactIcon>
          </ContactCard>
        </div>
      </TalkContact>

      {/* Footer */}
      <Footer expanded={false} />
    </div>
  );
};

export default TalkUs;
