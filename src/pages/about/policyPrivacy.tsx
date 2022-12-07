import type { NextPage } from "next";
import { PolicyContainer, PolicyCard } from "../../styles/about/policyPrivacy";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Breadcrumbs, Crumb } from "../../components/breadcrumb/styles";

const PolicyPrivacy: NextPage = () => {
  return (
    <div>
      {/* NavBar */}
      <Navbar />
      {/* BreadCrumb */}
      <Breadcrumbs>
        <Crumb>
          <a href="#">Home</a>
        </Crumb>
        <Crumb>Política e Privacidade</Crumb>
      </Breadcrumbs>

      {/* Policy&Privacy */}
      <PolicyContainer>
        <h5>Política e Privacidade</h5>
      </PolicyContainer>

      {/* PolicyCard */}
      <PolicyCard>
        <h6>Lei Geral de Proteção de Dados</h6>
        <p>
          Para a equipe da Trama, privacidade e segurança são duas coisas muito
          importantes. Nós nos comprometemos com a transparência do tratamento
          dos seus dados pessoais, já que você é a razão pela qual existimos.
          Nesse espaço, informamos como é feita a coleta, uso e transferência de
          informações dos nossos clientes ou pessoas que acessam o nosso site.
          dos nossos usuários/clientes. Ao utilizar nossos serviços, você
          entende que coletaremos e usaremos suas informações pessoais nas
          formas descritas nesta Política, sob as normas da Constituição Federal
          de 1988 (art. 5º, LXXIX; e o art. 22º, XXX – incluídos pela EC
          115/2022), das normas de Proteção de Dados (LGPD, Lei Federal
          13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e
          as demais normas do ordenamento jurídico brasileiro aplicáveis.
        </p>
      </PolicyCard>

      <PolicyCard>
        <h6>Consentimento</h6>
        <p>
          É a partir do seu consentimento que tratamos os seus dados pessoais. O
          consentimento é a manifestação livre, informada e inequívoca pela qual
          você autoriza a equipe da Trama a tratar seus dados. Dessa forma, em
          consonância com a Lei Geral de Proteção de Dados, seus dados só serão
          coletados, tratados e armazenados mediante prévio e expresso
          consentimento.
        </p>
        <p>
          O seu consentimento será obtido de forma específica para cada
          finalidade acima descrita, evidenciando o compromisso de transparência
          e boa-fé daTrama para com seus usuários e clientes, seguindo as
          regulações legislativas pertinentes. Ao utilizar os serviços da Trama
          e fornecer seus dados pessoais, você está ciente e consentindo com as
          disposições desta Política de Privacidade, além de conhecer seus
          direitos e como exercê-los.
        </p>
        <p>
          Lembre-se: a qualquer tempo e sem nenhum custo, você poderá revogar
          seu consentimento. É importante destacar que a revogação do
          consentimento para o tratamento dos dados pode implicar a
          impossibilidade da performance adequada de alguma funcionalidade do
          site que dependa da operação, mas não se preocupe, tais consequências
          serão informadas previamente.
        </p>
      </PolicyCard>

      <PolicyCard>
        <h6>O que fazemos para manter seus dados seguros?</h6>
        <p>
          A Trama garante que:
          <ul>
            <li>
              Apenas pessoas autorizadas têm acesso a seus dados pessoais.
            </li>
            <li>
              O acesso a seus dados pessoais é feito somente após o compromisso
              de confidencialidade.
            </li>
            <li>
              Seus dados pessoais são armazenados em ambiente seguro e idôneo.
            </li>
          </ul>
        </p>

        <p>
          Nos comprometemos a adotar as melhores posturas para evitar incidentes
          de segurança. Contudo, é necessário destacar que nenhuma página
          virtual é inteiramente segura e livre de riscos. É possível que,
          apesar de todos os nossos protocolos de segurança, problemas de culpa
          exclusivamente de terceiros ocorram, como ataques cibernéticos de
          hackers, ou também em decorrência da negligência ou imprudência do
          próprio usuário/cliente. Em caso de incidentes de segurança que possa
          gerar risco ou dano relevante para você ou qualquer um de nossos
          usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional
          de Proteção de Dados sobre o ocorrido, em consonância com as
          disposições da Lei Geral de Proteção de Dados.
        </p>
      </PolicyCard>

      {/* Footer */}
      <Footer expanded />
    </div>
  );
};

export default PolicyPrivacy;
