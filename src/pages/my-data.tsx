import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Address from "../components/profile/Address";
import Personal from "../components/profile/Personal";
import Plan from "../components/profile/Plan";
import Sidebar from "../components/sidebar";
import { useProfileMenuData } from "../stores/profileMenuData";

import { Content } from "../styles/my-data";

const MyData: React.FC = () => {
  const activeMenu = useProfileMenuData((state) => state.activeMenu);
  return (
    <>
      <Navbar />
      <Content>
        <Sidebar />
        {activeMenu === "my-data" && <Personal />}
        {activeMenu === "address" && <Address />}
        {activeMenu === "plan" && <Plan />}
      </Content>
      <Footer expanded={false} />
    </>
  );
};

export default MyData;
