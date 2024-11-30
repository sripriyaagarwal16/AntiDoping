import React from 'react';
import Searchbar from '../components/SearchBar/SearchBar';
import Slider from '../components/Slider/Slider';
import '../components/Player.css'
const Home = () => {
  return (
    <>
      <Searchbar />
      
      {/* Add Potential Culprits Topic Here */}
      <div className="potential-culprits">
        <h2>Alleged doper</h2>
      </div>
      
      <Slider />
    </>
  );
};

export default Home;
