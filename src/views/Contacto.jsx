import React, { useState } from "react";

const Contacto = () => {
  const [correo, setCorreo] = useState("");
  const [desc, setDesc] = useState("");
  const updateData = (event) => {
    event.preventDefault();
    if (correo.length == 0 || desc.length == 0) {
      alert("Por favor llene todos los campos");
    } else {
      alert("Formulario enviado, gracias por contactarnos");
    }
  };
  return (
    <div>
      <p style={{ fontSize: "50px", textAlign: "center" }}>
        Cuentanos, ¿En qué te podemos ayudar?{" "}
      </p>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={updateData}
      >
        <p>Correo:</p>
        <input
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="name@example.com"
          style={{ width: "40%" }}
        />
        <p>Descripción</p>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows="4"
          type="textbox"
          style={{ width: "40%" }}
        />
        <br />
        <button type="submit" className="btn btn-danger text-white">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
