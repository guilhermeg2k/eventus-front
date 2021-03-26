import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import purify from "dompurify";

export default function Event(){
  let { id } = useParams();

  const [event, setEvent ] = useState({});
  useEffect(()=> {
    axios.get(`https://eventus-back.guilhermenasci6.repl.co/event/${id}`).then(response =>{
      setEvent(response.data);
    });
  }, [id]);

  return (
    <section className={styles.eventContainer}>
      <div className={styles.event}>
        <h1> {event.name} </h1>
        <div>
          <div className={styles.eventImage}>
            <img src={event.imageURL} alt=""/>
          </div>
          <p dangerouslySetInnerHTML={{ __html: purify.sanitize(event.description)}}/> 
        </div>
      </div>
    </section>
  )
}