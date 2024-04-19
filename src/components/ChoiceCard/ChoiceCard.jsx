import React from 'react';
import './ChoiceCard.css';

const ChoiceCard = () => {
  return (
    <div className="card-container">
      <div className="question-container">
        <span className="question">Which is your favourite?</span>
      </div>
      <div className="image-container">
        <div className="image-template">
          <img src="src/assets/seas.jpg" alt="Adventure" className="image" />
          <span className="image-label">Adventure on Sea</span>
        </div>
        <div className="choice-text">
          <span className="this">This</span>
          <span className="or">or</span>
          <span className="that">That</span>
        </div>
        <div className="image-template">
          <img src="src/assets/beach.jpg" alt="Relax on the beach" className="image" />
          <span className="image-label">Relax on the beach</span>
        </div>
      </div>
    </div>
  );
};

export default ChoiceCard;