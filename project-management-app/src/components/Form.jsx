import React from "react";
import ErrorModal from "./ErrorModal";
import { useRef } from "react";

const Form = ({ setProjects, setIsAddProject, setIsTasks }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const modalRef = useRef();

  const handleProjects = () => {
    if (
      titleRef.current.value.trim() === "" ||
      descriptionRef.current.value.trim() === "" ||
      dateRef.current.value.trim() === ""
    ) {
      modalRef.current?.open();
      return;
    }
    const newProject = {
      id: Date.now() + "",
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
    };
    setProjects((prevProjects) => [newProject, ...prevProjects]);
    setIsAddProject(false);
    setIsTasks(false);
  };

  return (<>
    <ErrorModal ref={modalRef} >
      <h1>Please enter a valid information.</h1>
    </ErrorModal>
    <div className="form-container">
      <div className="buttons">
        <button className="cancel-btn">Cancel</button>
        <button className="save-btn" onClick={handleProjects}>
          Save
        </button>
      </div>
      <div className="input-group">
        <label>TITLE</label> <br />
        <input type="text" ref={titleRef} required />
      </div>

      <div className="input-group">
        <label>DESCRIPTION</label> <br />
        <input type="text" ref={descriptionRef} />
      </div>

      <div className="input-group">
        <label>DUE DATE</label> <br />
        <input type="date" ref={dateRef} />
      </div>
    </div>
    </>
  );
};

export default Form;
