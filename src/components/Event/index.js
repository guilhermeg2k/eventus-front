import React from 'react';
import style from "./style.module.css";

export default function Event(props){
  return (
    <div className={style.event}>
      <img src={props.imgURL} alt=""/>
      <div>
        <div>
          <h4> {props.name} </h4>
          <span> {props.location} </span> <br/>
          <span> {props.place} </span>
        </div>
        <div>
          <div className={style.eventDay}>{props.startDate.day}</div>
          <div className={style.eventMonth}>{props.startDate.month}</div>
          <div style={{color: "var(--blue)"}}>a</div>
          <div className={style.eventDay}>{props.endDate.day}</div>
          <div className={style.eventMonth}>{props.endDate.month}</div>
        </div>
      </div>
    </div>
  )
}