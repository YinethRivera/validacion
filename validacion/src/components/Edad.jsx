import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./edad.css"; 

const AgeVerificationModal = ({ onClose }) => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState(""); 
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^[1-9][0-9]?$/.test(value)) {
      setAge(value);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const ageNumber = parseInt(age, 10);
    if (isNaN(ageNumber)) return;

    let validationMessage = "";
    let colorClass = "";

    if (ageNumber > 18) {
      validationMessage = "Puedes ingresar al evento";
      colorClass = "green";
    } else if (ageNumber >= 12) {
      validationMessage =
        "Puedes ingresar al evento con supervisión de un adulto";
      colorClass = "yellow";
    } else {
      validationMessage = "No puedes ingresar al evento";
      colorClass = "red";
    }

    setMessage(validationMessage);
    setMessageColor(colorClass);

    const newRecord = {
      id: uuidv4(),
      age: ageNumber,
      dateTime: new Date().toISOString(),
    };

    setRecords([...records, newRecord]);
    setAge("");
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="form">
        <label>
          Ingresa tu edad:
          <input
            type="text"
            value={age}
            onChange={handleChange}
            maxLength="3"
            className="input"
          />
        </label>
        <button type="submit" className="button">
          Verificar
        </button>
      </form>
      <div className={`message ${messageColor}`}>{message}</div>
      <div>
        <h3>Registros de Verificación:</h3>
        <ul className="records-list">
          {records.map((record) => (
            <li key={record.id} className="record-item">
              ID: {record.id}, Edad: {record.age}, Fecha y Hora:{" "}
              {record.dateTime}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={onClose} className="close-button">
        Cerrar
      </button>
    </div>
  );
};

export default AgeVerificationModal;
