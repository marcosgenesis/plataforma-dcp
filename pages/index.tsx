import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Subscribe from "./subscribe";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "24px",
          height: "60px",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img
          src="https://media.tenor.com/YxQRjVsG73cAAAAC/caneta-azul.gif"
          style={{ width: "100px", height: "100px" }}
        ></img>

        <button
          style={{
            border: "none",
            padding: "1rem 3rem",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            textDecoration: "none",
          }}
          onClick={() => router.push("waitlist")}
        >
          Garantir acesso
        </button>
      </div>
      <div
        style={{
          background: "#eee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5rem",
          height: "10vh",
        }}
      >
        Restante da landing page
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
