import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/38574162?s=400&v=4"
          alt="Gustavo Lopes"
        />
        <div>
          <strong>Gustavo Lopes</strong>
          <span>Fisica</span>
        </div>
      </header>

      <p>
        Amante de fisica quantica.
        <br />
        <br />
        Apaixonado por estudar fisica e de suas teorias desde os primordios da terras, amo calculos e explosoes... 
        venha sentir a energia da fisica.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
