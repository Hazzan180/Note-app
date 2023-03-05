import './App.css';
import NoteList from './Components/NoteList';
import Search from './Components/Search';
import Header from './Components/Header';
import { useState, useEffect } from 'react';
import {v4 as uuidv4} from "uuid";
import Alert from './Components/Alert';

/*
//creating a dummy data to work with for the main time
const initialNote = [
  {id: uuidv4(), text: "This is the 1st note", date:"1/12/2020"},
  {id: uuidv4(), text: "This is the 2nd note", date:"2/12/2020"},
  {id: uuidv4(), text: "This is the 3rd note", date:"3/12/2020"}
]
*/

//let set our value to localstorage
const initialNote = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []




function App() {
  
  // ***** useState *****

  //this state is for notes
  const [notes, setNotes] = useState(initialNote);
  
  //this state is for textarea
  const [text, setText] = useState("");

  //this state is for edit function
  const [edit, setEdit] = useState(false);

  //this state is for edited id
  const [id, setId] = useState(0);

  //this state is for searchtext
  const [searchText, setSearchText] = useState("");

  //this state is for the dark mode
  const [darkMode, setDarkMode] = useState(false);

  //this state is for the alert
  const [alert, setAlert] = useState({show:false})

  // ****** useEffect *****
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  // ***** Funcationality *****
  const handleTextArea = e => {
    //this is for the number of text we can add
    //if our characterLimit - total number of text is > 0r = o 
    //we can add more text but if it's not we won't we allowed to add any text
    let characterLimit = 200
    if(characterLimit - e.target.value.length >= 0) 
    setText(e.target.value)
  }

  const handleSave = e => {
    e.preventDefault()
    const date = new Date();
    //if text is not empty add new not
    if(text !== ""){
      
      //if edited is true we replace we note with the changed value 
      if(edit){
        let teNote = notes.map(item => {
          return item.id === id ? {...item, text} : item
        })
        setNotes(teNote);
        setEdit(false)
        hadleAlert({type:"success", text:"Note Edited"})
        //if edited is false we add a new note
      }else {
        const newNote = {id: uuidv4(), text: text, date:date.toLocaleDateString()}
        setNotes([...notes, newNote]);
        hadleAlert({type:"success", text:"Note Added"})
      }
      setText("")
    }else{
      hadleAlert({type:"danger", text:"Input field can not be empty. Type in Your input"})
    }
  }

  //this is the funcation for edit button
  const handleEdit = (id) => {
    let note = notes.find(item => item.id === id)
    let {text} = note
    setText(text)
    setEdit(true)
    setId(id)
  }

  //this is the funcation for delete button
  const handleDelete = (id) => {
    let tempNote = notes.filter(item => item.id !== id)
    setNotes(tempNote)
    hadleAlert({type:"danger", text:"Note Deleted"})
  }

  //this funcation is for hadleSearchText
  const hadleSearchText = e => {
    setSearchText(e.target.value)
  }

  const hadleAlert = ({text, type}) => {
    setAlert({show:true, type, text});
    setTimeout(() => {setAlert({show:false})}, 3000)
  }


  
  return (
    //if darkmode is true add the dark-theme if is not don't add it 
    <div className={`${darkMode && 'dark-theme'}`}>
       <div className='container'>
        {alert.show && <Alert type={alert.type} text={alert.text}/>}
        <Header hadleToggle={setDarkMode}/>
        <Search hadleSearchText={hadleSearchText}/>
        <NoteList notes={notes.filter((note) => 
      //this look for the text we enteried that is related to our note
                note.text.toLowerCase().includes(searchText)
      )}
                text={text}
                handleTextArea={handleTextArea}
                handleSave={handleSave}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
      />
      </div>
    </div>
  );
}

export default App;
