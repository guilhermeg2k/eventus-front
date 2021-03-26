import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import styles from "./styles.module.css";
import axios from 'axios';

export default function CRUD(){
  const [eventId, setEventId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription ] = useState("");
  const [location, setLocation] = useState("");
  const [place, setPlace] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [events, setEvents] = useState({list: []});
  const [isEditing, setIsEditing] = useState(false);
  async function fetchEvents(){
    try{
      const response = await axios.get('https://eventus-back.guilhermenasci6.repl.co/events')
      setEvents({
        list: response.data
      });
    }  catch (err){
      console.log(err);
    }
    
  }

  function clearFields(){
    setName("");
    setDescription("");
    setLocation("");
    setPlace("");
    setImageURL("");
    setStartDate("");
    setEndDate("");
  }

  async function createEvent(){
    try{
      await axios.post('https://eventus-back.guilhermenasci6.repl.co/event', {
      name,
      description,
      location,
      place,
      startDate,
      endDate,
      imageURL
    });
      alert("Evento criado!");
      fetchEvents();
      clearFields();
    } catch (err){
      console.log(err);
    }
  }

  async function editEvent(id){
    try{
      const response = await axios.get(`https://eventus-back.guilhermenasci6.repl.co/event/${id}`);
      const event = response.data;
      setEventId(event.id);
      setName(event.name);
      setDescription(event.description);
      setLocation(event.location);
      setPlace(event.place);
      setImageURL(event.imageURL);
      setEndDate(event.endDate);
      setStartDate(event.startDate);
      setIsEditing(true);
    } catch (err){
      console.log(err);
    }
  }

  async function saveEvent(id){
    try{
      await axios.put("https://eventus-back.guilhermenasci6.repl.co/event/", {
        id: eventId,
        name,
        description,
        location,
        place,
        startDate,
        endDate,
        imageURL
      });
      alert("Evento atualizado!");
      setIsEditing(false);
      fetchEvents();
      clearFields();
    } catch(err){
      console.log(err);
    }
  }

  async function deleteEvent(id){
    try{
      await axios.delete(`https://eventus-back.guilhermenasci6.repl.co/event/${id}`);
      alert("Evento deletado!");
      fetchEvents();
    } catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return(
    <section className={styles.createEventContainer}>
      <div className={styles.createEvent}>
      <h1> Lista de eventos </h1>
        <div className={styles.eventList}>
            <div>
                {events.list.map(event => 
                <>
                  <Link to={`event/${event.id}`}>{event.id}</Link>
                  <span>{event.name}</span>
                  <span>{event.location}, {event.place}</span>
                  <i class="fas fa-edit" onClick={() => editEvent(event.id)}></i>
                  <i class="fas fa-trash" onClick={() => deleteEvent(event.id)}></i>
                </>         
                )
              }
            </div> 

          </div>
          <h1> Criar evento </h1>
          <label>Nome</label>
          <input type="text" onChange={(e) => setName(e.currentTarget.value)} value={name}/>
          <label>Texto Descrição</label>
          <textarea onChange={(e) => setDescription(e.currentTarget.value)} value={description}/>
          <label>País</label>
          <input type="text" onChange={(e) => setLocation(e.currentTarget.value)} value={location}/>
          <label>Local</label>
          <input type="text" onChange={(e) => setPlace(e.currentTarget.value)} value={place}/>
          <label>Data de inicio</label>
          <input type="date" onChange={(e) => setStartDate(e.currentTarget.value)} value={startDate}/>
          <label>Data de finalização</label>
          <input type="date" onChange={(e) => setEndDate(e.currentTarget.value)} value={endDate}/>
          <label>Url do Banner</label>
          <input type="text" onChange={(e) => setImageURL(e.currentTarget.value)} value={imageURL}/>
          {
            isEditing ? 
            <button onClick={saveEvent}> Salvar evento</button> : 
            <button onClick={createEvent}> Criar evento</button>
          }
      </div>
      
    </section>
  )
}