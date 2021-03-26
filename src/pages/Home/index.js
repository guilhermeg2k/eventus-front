import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import MainEvents from '../../components/MainEvents';
import Event from "../../components/Event";

import styles from "./styles.module.css";
import axios from "axios";

export default function Home(){
  const [events, setEvents] = useState({list: []});
  const [mainEvent, setMainEvent] = useState({});

  useEffect(()=> {
    axios.get('https://eventus-back.guilhermenasci6.repl.co/events')
    .then(function (response) {
      for(let i = 0; i < response.data.length ; i++){
        response.data[i].startDate = {
          day: new Date(response.data[i].startDate).toLocaleDateString('pt-br',{day: 'numeric'}),
          month: new Date(response.data[i].startDate).toLocaleDateString('pt-br',{month: 'short'}),
        }
        response.data[i].endDate = {
          day: new Date(response.data[i].endDate).toLocaleDateString('pt-br',{day: 'numeric'}),
          month: new Date(response.data[i].endDate).toLocaleDateString('pt-br',{month: 'short'}),
        }
      }
      setEvents({
        list: response.data
      });
    });

    axios.get('https://eventus-back.guilhermenasci6.repl.co/event/main')
    .then(function (response) {
      setMainEvent(
       response.data
       );
    })
  }, []);

  return (
    <>
        <MainEvents
          id={mainEvent.id}
          name={mainEvent.name}
          description={mainEvent.description}
          imageURL={mainEvent.imageURL}
        />
        <div className={styles.eventsContainer}>
          <section className={styles.events}>
            <h2> Eventos recentes </h2>
            <div>
              {events.list.map(event => <Link to={`event/${event.id}`} ><Event 
                key={event.id}
                name={event.name}
                location= {event.location}
                place= {event.place}
                startDate= {event.startDate} 
                endDate= {event.endDate} 
                imgURL={event.imageURL}
              /> </Link>)}
            </div>
          </section>         
        </div>
    </>
  );
}