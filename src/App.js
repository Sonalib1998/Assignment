import React, { useState ,useEffect} from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import axios from "axios";
const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });

    console.log(addItem);
  };
  useEffect(()=>{
    const fetchAllNotes=async()=>{
      try{
      const res=await axios.get("http://localhost:8800/getAllNotes")
      setAddItem(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllNotes()
  },[])

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={val.id}
            id={val.id}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
    </>
  );
};

export default App;
