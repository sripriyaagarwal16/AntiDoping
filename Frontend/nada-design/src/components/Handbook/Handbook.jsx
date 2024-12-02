import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Handbook.css';
import cleansport from '../../assets/CleanSports.png';
import humanbody from '../../assets/humanbody.png';
import whistle from '../../assets/whistle.png';
import atheletes from '../../assets/Athletes.png';
import { useTranslation } from 'react-i18next'; // Import i18next hook to handle language change

const Handbook = () => {
  const { t } = useTranslation(); 

  const navigate = useNavigate();
  const slides = [
    {
      img: cleansport,
      title: t('handbook.introduction_to_anti_doping'),
      quizId: 'intro', // Matching ID with Questions.jsx data
      exerciseLink: '/article',
      Videolink: '/videos'
    },
    {
      img: humanbody,
      title: t('handbook.health_risks_of_doping'),
      quizId: 'health', // Matching ID with Questions.jsx data
      exerciseLink: 'tumorExercise.html',
      Videolink: ''
    },
    {
      img: whistle,
      title: t('handbook.anti_doping_rules_and_regulations'),
      quizId: 'rules',
      exerciseLink: 'pnemoniaExercise.html',
      Videolink: ''
    },
    {
      img: 'https://media.istockphoto.com/id/1340416451/photo/happy-athletic-couple-crossing-the-finish-line-during-marathon-in-nature.jpg?s=612x612&w=0&k=20&c=IBg8SfWXJ5-AwRF9ylg5B6937IA8xK9gUrqZ4MXA2So=',
      title: t('handbook.ethics_and_fair_play_in_sports'),
      quizId: 'ethics',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://img.freepik.com/premium-photo/laboratory-person-test-tube-with-checklist-writing-medicine-information-notes-treatment-clipboard-medical-expert-scientist-with-sample-research-study-diagnosis-analysis_590464-478690.jpg',
      title: t('handbook.the_testing_process'),
      quizId: 'testing',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://as2.ftcdn.net/v2/jpg/00/89/13/09/1000_F_89130902_3E5gIuTXtsSuVumYXOI6F88vJhDYdjlX.jpg',
      title: t('handbook.athletes_rights_and_responsibilities'),
      quizId: 'rights',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://img.olympics.com/images/image/private/t_original_767-auto/f_auto/primary/mey4jqv5mr5xnv5auevb',
      title: t('handbook.real_life_stories_and_case_studies'),
      quizId: 'cases',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://media.istockphoto.com/id/1271503520/photo/right-vs-wrong-white-two-street-signs-with-arrow-on-metal-pole-with-word-directional-road.jpg?s=612x612&w=0&k=20&c=UtyUynjCgHEhBdGqQuBpxN2FhbITqBR71c0XwcfUbFw=',
      title: t('handbook.how_to_avoid_doping_traps'),
      quizId: 'traps',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://images.stockcake.com/public/b/4/e/b4e39bd0-6c30-4c15-9791-aef39b537963_large/coach-mentoring-athlete-stockcake.jpg',
      title: t('handbook.the_role_of_coaches_and_support_staff'),
      quizId: 'coaches',
      exerciseLink: 'diabetiesExercise.html',
      Videolink: ''
    },
    {
      img: 'https://www.genevaenvironmentnetwork.org/wp-content/uploads/2023/02/markus-spiske-aXpvGGu1fNs-unsplash-scaled-aspect-ratio-2000-1200-1024x614.jpg',
      title: t('handbook.future_of_anti_doping-'),
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
                    {t('handbook.quiz')}
                  </button>
                  <a href={slide.exerciseLink} className="exercise"> {t('handbook.articles')}</a>
                </div>
                <div className="video-button">
                  <a href={slide.Videolink} className="Videos"> {t('handbook.videos')}</a>
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