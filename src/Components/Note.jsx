import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';


const Note = ({item, handleDelete,handleEdit}) => {
    const {id, text, date} = item
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <div>
            <button className='btn' 
                    onClick={() => handleDelete(id)}
            > <MdDelete size="15px"/> </button>
            <button className='btn2'
                    onClick={() => handleEdit(id)}
            >  <MdEdit size="15px"/> </button>
            </div>
        </div>
    </div>
  )
}

export default Note