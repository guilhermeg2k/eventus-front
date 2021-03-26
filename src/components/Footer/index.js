import React from 'react';

import style from "./style.module.css";
import footerPayments from "../../assets/images/footer_payments.png";
export default function Footer(){
  return (
    <footer className={style.footerContainer}>
      <div className={style.footer}>
        <ul>
          <li>Quem somos</li>
          <li>Termos de uso</li>
          <li>Trabalhe conosco</li>
          <li>Nossas lojas</li>
        </ul>
        <div>
          <img src={footerPayments} alt=""/>
        </div>
        <div>
            © 2020 Ingrezos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}