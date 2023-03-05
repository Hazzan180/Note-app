import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NoteList = ({notes,text,handleTextArea,handleSave,handleDelete,handleEdit, me}) => {
  return (
    <div className='note-list'>
       {notes.map(item => {
        return <Note key={item.id} item={item} text={text} handleTextArea={handleTextArea} me={me} handleDelete={handleDelete} handleEdit={handleEdit}/>
       })}
       <AddNote handleTextArea={handleTextArea} text={text} handleSave={handleSave}/>
    </div>
  )
}

export default NoteList