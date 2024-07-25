import React from 'react';

const Note = ({ note }) => {
  // Generar un angulo de rotacion entre -5 y 5
  const rotateAngle = Math.floor(Math.random() * 10) - 7;

  return (
    <div className={`note ${note.important ? 'important' : ''}`} style={{ transform: `rotate(${rotateAngle}deg)` }}>
      <h2 className="note-title">{note.title}</h2>
      <p className="note-description">{note.description}</p>
    </div>
  );
};

export default Note;
