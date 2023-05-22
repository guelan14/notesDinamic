import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notes from "../notes";
import CreateArea from "./CreateArea";
import {useState} from "react";



function App(){

    const [notes, setNotes]=useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });

    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (<div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => {return(
        <Notes 
        key={index} 
        id={index} 
        title={noteItem.title} 
        content={noteItem.content} 
        onDelete={deleteNote}/>);})}
        <Footer />
    </div>);
}

export default App;