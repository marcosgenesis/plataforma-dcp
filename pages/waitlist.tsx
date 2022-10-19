import React from "react";

// import { Container } from './styles';

const Waitlist: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src='https://memecreator.org/static/images/memes/5357030.jpg'
          alt=''
        />
        <div
          style={{
            width: "400px",
            outline: "1px solid #eee",
            padding: "16px",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <h3>Entre na lista de espera mais desejada da UFC quixadá</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          quam mollitia delectus illum a unde maiores corporis aut nihil labore
          consequuntur totam temporibus nobis alias dolorem accusantium eius ea
          ipsum.
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor='email'
              style={{ fontSize: "12px", color: "#939393" }}
            >
              E-mail
            </label>
            <input
              type='email'
              placeholder='fulano@gmail.com'
              style={{
                height: "32px",
                borderRadius: "8px",
                border: "none",
                padding: "4px 12px",
                background: "#eee",
              }}
            />
          </div>
          <button
            style={{
              border: "none",
              padding: "1rem 3rem",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {" "}
            Inscrever Agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
