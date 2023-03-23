import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
const CreateNote = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [note, setNotes] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setNotes((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = async () => {
    props.passNote(note);
    setNotes({
      title: "",
      content: "",
    });
    try{
await axios.post("http://localhost:8800/createNotes",note)
    }catch (err){
console.log(err)
    }
  };

  const expandIt = () => {
    setIsExpand(true);
  };

  const backToOriginal = () => {
    setIsExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={backToOriginal}>
        <form>
          {isExpand ? (
            <input
              type="text"
              placeholder="Title"
              name="title"
              autoComplete="off"
              value={note.title}
              onChange={inputEvent}
            />
          ) : null}

          <br />
          <textarea
            placeholder="Take a note..."
            rows=""
            coloum="1"
            name="content"
            value={note.content}
            onChange={inputEvent}
            onClick={expandIt}
          ></textarea>

          {isExpand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;

