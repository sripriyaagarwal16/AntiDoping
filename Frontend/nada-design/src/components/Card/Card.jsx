import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Card.css'; // Custom CSS file for styling if needed

const InvestigationHighlights = () => {
  const highlights = [
    {
      id: 1,
      image: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/da7b55ce-5d48-40d1-9b3c-e075e44139ff/image.png", // Replace with the actual image URL
      title: 'AI Uncovers Doping Scandal in Basketball League',
      date: '04 June 2024',
      author: 'Jake Will.',
      description:
        'Advanced AI tools exposed a top player’s hidden doping scheme, leading to a two-year ban and preserving the integrity of the professional basketball league.',
      category: 'Basketball',
    },
    {
      id: 2,
      image: "https://cdn.britannica.com/44/256944-050-8D414329/PV-Sindhu-2020-Tokyo-Olympics.jpg", // Replace with the actual image URL
      title: 'Hockey Player Faces Doping Probe After Suspicious Test Results',
      date: '03 June 2024',
      author: 'Foxi.zacon',
      description:
        'An elite ice hockey player is under scrutiny following abnormal results in routine testing, prompting an investigation into possible doping violations.',
      category: 'Hockey',
    },
    {
      id: 3,
      image: "https://static.toiimg.com/thumb/msid-79125381,width-400,resizemode-4/79125381.jpg", // Replace with the actual image URL
      title: 'Top Badminton Star Under Investigation for Potential Doping',
      date: '01 June 2024',
      author: 'Bong Lozada',
      description:
        'A leading badminton player is currently under investigation after irregularities were flagged in their biological passport, raising concerns of potential doping violations.',
      category: 'Badminton',
    },
  ];

  const settings = {
    dots: true, // Pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of visible cards
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Investigation Highlights</h2>
      <Slider {...settings}>
        {highlights.map((highlight) => (
          <div key={highlight.id} className="cards">
            <img src={highlight.image} alt={highlight.category} className="card-image" />
            <div className="card-content">
              <span className="category">{highlight.category}</span>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
              <div className="author-info">
                <span>{highlight.author}</span>
                <span>{highlight.date}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InvestigationHighlights;
