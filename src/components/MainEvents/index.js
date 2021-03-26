import React from 'react';
import {Link} from "react-router-dom";
import style from "./style.module.css";
import purify from "dompurify";

export default function MainEvents(props){
  return (
    <div className={style.mainEventsContainer}>
      <div className={style.mainEvents}>
        <div>
          <Link to={`event/${props.id}`}>
            <img src={props.imageURL} alt=""/>
          </Link>
        </div>
        <div>
          <Link to={`event/${props.id}`}>
            <h2> {props.name} </h2>
           </Link>
          <p dangerouslySetInnerHTML={{ __html: purify.sanitize(props.description)}}>
          </p>
        </div>
      </div>
    </div>
  )
}