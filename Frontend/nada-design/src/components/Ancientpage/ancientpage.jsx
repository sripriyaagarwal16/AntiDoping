import React, { useState } from 'react';
import './ancientpage.css';
import ancientimage from '../../assets/ancientimage.png'; // Right statue image
import ancientleft from '../../assets/ancientleft.png'; // Left statue image
import Linkforancient from '../Linksforancient/linksforancient';
const AncientPage = () => {
  const [readMoreMode, setReadMoreMode] = useState(false);

  const handleReadMore = () => {
    setReadMoreMode(true);
  };

  const handleBack = () => {
    setReadMoreMode(false);
  };

  return (
    <>
    <div className={`page-container ${readMoreMode ? 'read-more-mode' : ''}`}>
      <header className="header">
        <h1 className="title">
        Ancient Indian Sports and  <span className="highlight">Anti-Doping Ethics</span>
        </h1>
      </header>
      {/* Content section */}
      <div className={`content ${readMoreMode ? 'move-right' : ''}`}>
        {!readMoreMode ? (
          <>
            <p className="description1">
            Ancient Indian sports were deeply rooted in discipline, fairness, and the natural strength of individuals. Activities like wrestling, archery, and chariot racing emphasized the importance of ethical conduct and personal integrity. 
            </p>
            <p className="subtext">
            The ancient athletes believed in honing their natural abilities through rigorous training and a balanced lifestyle.
            </p>
            <button className="read-more-btn" onClick={handleReadMore}>
              Read More
            </button>
          </>
        ) : (
          <div className="expanded-content">
            <p className="description">
            Ancient Indian sports were not just about physical prowess but also a reflection of moral values and ethical practices. Disciplines like Mallakhamba (pole gymnastics), wrestling (kushti), archery, and chariot racing showcased the athletes' dedication to skill and fairness. 
            </p>
            <button className="back-btn" onClick={handleBack}>
              Back
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <aside className={`navigation ${readMoreMode ? 'fade-out' : ''}`}>
      </aside>

      {/* Statue container */}
      <div className="statue-container">
        {/* Left and Right statues with their respective classes */}
        <div
          className={`statue ${readMoreMode ? 'statue-left' : 'statue-right'}`}
        >
          <img
            src={readMoreMode ? ancientleft : ancientimage}
            alt="Statue"
            className="statue-image"
          />
        </div>
      </div>
    </div>
    <Linkforancient/>
    </>
  );
};

export default AncientPage;
