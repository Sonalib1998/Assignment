import React from "react";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from "@mui/material/Button";
import { CleaningServices } from "@mui/icons-material";
import axios from "axios";

const Note = (props) => {
  const deleteNote = async() => {
    // props.deleteItem(props.id);
    console.log(props);
    try{
      await axios.delete("http://localhost:8800/deleteNotes/"+props.id)
      window.location.reload()
          }catch (err){
      console.log(err)
          }
  };

  return (
    <>
      <div className="note">
        <h1> {props.title} </h1>
        <br />
        <p>{props.content} </p>
        <Button onClick={deleteNote} className="btn">
          <DeleteOutlineOutlinedIcon className="deleteIcon" />
        </Button>
      </div>
    </>
  );
};

export default Note;