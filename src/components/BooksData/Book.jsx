import React from 'react';

export default function Book({ pics, bookTitle, bookAuthor }) {
  return (
    <div 
      className="card shadow-sm text-center m-2" 
      style={{ width: "16rem", minHeight: "350px" }}
    >
      <img 
        src={pics} 
        alt={bookTitle} 
        className="card-img-top" 
        style={{ height: "220px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{bookTitle}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{bookAuthor}</h6>
      </div>
    </div>
  );
}
