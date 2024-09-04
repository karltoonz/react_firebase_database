import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

function Write() {
  const navigate = useNavigate();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "nature/fruits"));
    set(newDocRef, {
      fruitName: inputValue1,
      fruitDefinition: inputValue2,
    })
      .then(() => {
        alert("data saved successfully");
      })
      .catch((error) => {
        alert("error: ", error.message);
      });
  };

  return (
    <div>
      <h1>Write Page</h1>
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />

      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <br />
      <button onClick={saveData}>Save Data</button>

      <button className="button1" onClick={() => navigate("/update")}>
        Go UpdateRead Page
      </button>
      <br />
      <br />
      <br />
      <button className="button1" onClick={() => navigate("/read")}>
        Go Read Page
      </button>
    </div>
  );
}

export default Write;