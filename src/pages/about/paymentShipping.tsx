import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../../components/navbar";
import {
  PaymentContainer,
  PaymentCard,
  PaymentCardContainer,
} from "../../styles/about/paymentShipping";
import { Breadcrumbs, Crumb } from "../../components/breadcrumb/styles";
import Footer from "../../components/footer";

const PaymentShipping: NextPage = () => {
  return (
    <div>
      {/* NavBar */}
      <Navbar />
      {/* Breadcrumb */}
      <Breadcrumbs>
        <Crumb>
          <a href="#">Home</a>
        </Crumb>
        <Crumb>Pagamento e envio</Crumb>
      </Breadcrumbs>

      {/* PaymentContainer */}
      <PaymentContainer>
        <h5>Formas de pagamento</h5>
      </PaymentContainer>

      {/* PaymentCardContainer */}
      <PaymentCardContainer>
        {/* PaymentCard */}
        <PaymentCard>
          <Image src="/credit-card.svg" width={120} height={120} />
          <div>
            <h6>Cartão de Crédito</h6>
            <p>
              Confira as bandeiras disponíveis e parcele suas compras em até 6x
              sem juros.
            </p>
          </div>
        </PaymentCard>

        <PaymentCard>
          <Image src="/pix.svg" width={120} height={120} />
          <div>
            <h6>Pix</h6>
            <p>
              Prático e rápido, sua compra é confirmada até 15 minutos depois
              após o pagamento.
            </p>
          </div>
        </PaymentCard>

        <PaymentCard>
          <Image src="/fatura.svg" width={120} height={120} />
          <div>
            <h6>Boleto Bancário</h6>
            <p>
              Para pagamentos à vista, a confirmação de pagamento pode ocorrer
              em até 3 dias.
            </p>
          </div>
        </PaymentCard>
      </PaymentCardContainer>

      {/* Send */}
      <PaymentContainer>
        <h5>Envio</h5>
      </PaymentContainer>

      {/* SendImg */}
      <PaymentContainer>
        <Image src="/shipping.svg" width={542} height={372} />
        <div className="column-div">
          <div>
            <h6>Informações</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              congue ex egestas ante pulvinar varius. Mauris aliquam facilisis
              magna, et accumsan enim vestibulum non. Curabitur ac finibus
              libero. Duis finibus nulla et ipsum hendrerit imperdiet eu ac
              orci. Phasellus iaculis augue vitae odio posuere, id dictum arcu
              hendrerit. Suspendisse potenti. Mauris auctor luctus finibus.
              Vestibulum id nulla erat. Mauris tristique luctus lectus, ut
              mattis orci. Mauris felis sem, semper bibendum iaculis sed,
              sodales eu purus. Duis ac augue at odio ultricies tristique.
              Nullam eu massa sit amet ante laoreet mattis id sed quam.
            </p>
          </div>
          <div>
            <h6>Informações</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              congue ex egestas ante pulvinar varius. Mauris aliquam facilisis
              magna, et accumsan enim vestibulum non. Curabitur ac finibus
              libero. Duis finibus nulla et ipsum hendrerit imperdiet eu ac
              orci. Phasellus iaculis augue vitae odio posuere, id dictum arcu
              hendrerit. Suspendisse potenti. Mauris auctor luctus finibus.
              Vestibulum id nulla erat. Mauris tristique luctus lectus, ut
              mattis orci. Mauris felis sem, semper bibendum iaculis sed,
              sodales eu purus. Duis ac augue at odio ultricies tristique.
              Nullam eu massa sit amet ante laoreet mattis id sed quam.
            </p>
          </div>
        </div>
      </PaymentContainer>

      {/* Footer */}
      <Footer expanded />
    </div>
  );
};

export default PaymentShipping;
