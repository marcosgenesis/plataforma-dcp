import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Address from "../../components/profile/Address";
import Personal from "../../components/profile/Personal";
import Plan from "../../components/profile/Plan";
import Sidebar from "../../components/sidebar";
import { useProfileMenuData } from "../../stores/profileMenuData";

import { Content,Container } from "../../styles/my-data";
import { withSSRAuth } from "../../utils/withSSRAuth";

const MyData: React.FC = () => {
  const activeMenu = useProfileMenuData((state) => state.activeMenu);
  return (
    <Container>
      <Navbar />
      <Content>
        <Sidebar />
        {activeMenu === "my-data" && <Personal />}
        {activeMenu === "address" && <Address />}
        {activeMenu === "plan" && <Plan />}
      </Content>
      <Footer expanded={false} />
    </Container>
  );
};

export default MyData;
export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    return { props: {} };
  },
);
