import React from 'react'

const AddNote = ({handleTextArea,text,handleSave}) => {
   let characterLimit = 200
  return (
    <div className='note-new'>
        <form onSubmit={handleSave}>
        <textarea rows="8" 
                  cols="20" 
                  placeholder="Type to add a note" 
                  onChange={handleTextArea}
                  value={text}
                  ></textarea>
        <div className="note-footer">
            <small>{characterLimit - text.length} Remaining</small>
            <button className='save' type='submit'>Save</button>
        </div>
        </form>
    </div>
  )
}

export default AddNote