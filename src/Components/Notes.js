import React from 'react';
import "./styles.css";
import DeleteIcon from '@mui/icons-material/Delete';

function Notes(props){

  function deleteOnClick(){
    props.deleteNotes(props.id);
   
  }
    return(
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={ deleteOnClick}>
      <DeleteIcon/> </button>
      </div>
    )
}  

export default Notes;