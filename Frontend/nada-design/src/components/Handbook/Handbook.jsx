import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Handbook.css';
import cleansport from '../../assets/CleanSports.png';
import humanbody from '../../assets/humanbody.png';
import whistle from '../../assets/whistle.png';
import atheletes from '../../assets/Athletes.png';

const Handbook = () => {
  const navigate = useNavigate();
  const slides = [
    {
      img: cleansport,
      title: 'Introduction to Anti-Doping',
      quizId: 'intro', // Matching ID with Questions.jsx data
      exerciseLink: 'heartExercise.html',
      Videolink: ''
    },
    {
      img: humanbody,
      title: 'Health Risks of Doping',
      quizId: 'health', // Matching ID with Questions.jsx data
      exerciseLink: 'tumorExercise.html',
      Videolink: ''
    },
    {
      img: whistle,
      title: 'Anti-Doping Rules and Regulations',
      quizId: 'rules',
      exerciseLink: 'pnemoniaExercise.html',
      Videolink: ''
    },
    {
      img: 'https://media.istockphoto.com/id/1340416451/photo/happy-athletic-couple-crossing-the-finish-line-during-marathon-in-nature.jpg?s=612x612&w=0&k=20&c=IBg8SfWXJ5-AwRF9ylg5B6937IA8xK9gUrqZ4MXA2So=',
      title: 'Ethics and Fair Play in Sports',
      quizId: 'ethics',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://img.freepik.com/premium-photo/laboratory-person-test-tube-with-checklist-writing-medicine-information-notes-treatment-clipboard-medical-expert-scientist-with-sample-research-study-diagnosis-analysis_590464-478690.jpg',
      title: 'The Testing Process',
      quizId: 'testing',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://as2.ftcdn.net/v2/jpg/00/89/13/09/1000_F_89130902_3E5gIuTXtsSuVumYXOI6F88vJhDYdjlX.jpg',
      title: 'Athletes Rights and Responsibilities',
      quizId: 'rights',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://img.olympics.com/images/image/private/t_original_767-auto/f_auto/primary/mey4jqv5mr5xnv5auevb',
      title: 'Real-Life Stories and Case Studies',
      quizId: 'cases',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://media.istockphoto.com/id/1271503520/photo/right-vs-wrong-white-two-street-signs-with-arrow-on-metal-pole-with-word-directional-road.jpg?s=612x612&w=0&k=20&c=UtyUynjCgHEhBdGqQuBpxN2FhbITqBR71c0XwcfUbFw=',
      title: 'How to Avoid Doping Traps',
      quizId: 'traps',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://images.stockcake.com/public/b/4/e/b4e39bd0-6c30-4c15-9791-aef39b537963_large/coach-mentoring-athlete-stockcake.jpg',
      title: 'The Role of Coaches and Support Staff',
      quizId: 'coaches',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://www.genevaenvironmentnetwork.org/wp-content/uploads/2023/02/markus-spiske-aXpvGGu1fNs-unsplash-scaled-aspect-ratio-2000-1200-1024x614.jpg',
      title: 'Future of Anti-Doping',
      quizId: 'future',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const handleQuizClick = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <main>
      <div className="slider">
        <div className="list">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={slide.img} alt={`Slide ${index}`} />
              <div className="content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <div className="video-button">
                  <button 
                    onClick={() => handleQuizClick(slide.quizId)} 
                    className="diet"
                  >
                    Quiz
                  </button>
                  <a href={slide.exerciseLink} className="exercise">Articles</a>
                </div>
                <div className="video-button">
                  <a href={slide.Videolink} className="Videos">Videos</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button className="prev" onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="thumbnail">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={slide.img} alt={`Thumbnail ${index}`} />
            <div className="contents">{slide.title}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Handbook;