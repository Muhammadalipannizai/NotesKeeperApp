import React, {useState} from 'react';
import Input from './Input';
import "./styles.css";
import Notes from './Notes';

function Box(){
    
    const [notes , setNotes] = useState([]);
   function addNote(note){
       setNotes( prevNote => {
        return [...prevNote , note]
       }
       );
   }
   function deleteItems(id)
   {
     setNotes(item => {
        return item.filter( (arg , index ) => { 
            return index !== id
        })
     })
        
   }
    return (
        <div className='box'>
           <Input
           onAdd  =  {addNote}
           />
           {
            notes.map((noteItems, index )=> { 
                return <Notes
                    key = {index}
                    id = {index}
                    title = {noteItems.title}
                    content = {noteItems.content}
                    deleteNotes = {deleteItems}
                />
            })
           }
         
        </div>
    )
}
export default Box;