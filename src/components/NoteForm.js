import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      addNote({
        title,
        description,
        important,
      });
      setTitle('');
      setDescription('');
      setImportant(false);
    } else {
      alert("Descripcion es requerida.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="note-form-input"
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="note-form-textarea"
      />
      <div className="note-form-footer">
        <label className="note-form-checkbox-label ">
          <input
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
            className="note-form-checkbox"
          />
          Importante!   
        </label>
        <button type="submit" className="note-form-button">Agregar</button>
      </div>
    </form>
  );
};

export default NoteForm;
