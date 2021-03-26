import React from 'react';
import { Link } from 'react-router-dom';
import style from "./style.module.css";

export default function TopBar(){
  return (
    <header className={style.topBarContainer}>
      <div className={style.blueLine}></div>
      <div className={style.topBar}>
        <div>
          <Link to="/">
            <h1> E-ventus </h1>
          </Link>
          <div className={style.searchBox}>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Pesquise por eventos"/>
          </div>
        </div>
        <div className={style.socialLinks}>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>   
    </header>
  )
}