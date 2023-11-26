import React, { useState } from 'react';
import "./styles.css";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Input(props){
    const [note, setNote] = useState({
            title : "",
           content  : ""
    });

    const [expand, setExpand]= useState(false);
    function bothFunc(event){
    
        const { name, value } = event.target;

        setNote( prev => {
            return {
                ...prev,
                [name] : value
            };
        });
    }
    function addNote(event){
        if (note.title.trim() === "" && note.content.trim() === "") {
            return
        }
        props.onAdd(note);
        event.preventDefault();
       setNote({
        title : "",
       content  : ""
})
    }
    function expanded(){
        setExpand(true);
    }

    return (
        <div className='inputbox'>
            <form className='formClass'>
                {expand && ( 
                <input name = "title"  placeholder='Title' onChange={bothFunc}   value ={note.title} /> )}
                <textarea  onClick={expanded} name = "content" placeholder='Take a note' onChange={bothFunc} value={note.content} 
                    rows = {expand && '4'} />
                <Zoom in= {expand}>
                    <Fab className='button1' type='submit'onClick={addNote}>  <AddIcon/>  </Fab>
                </Zoom>
            </form>
        </div>
    )
    }
    
    export default Input;