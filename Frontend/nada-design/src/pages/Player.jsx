import React from 'react';
import Searchbar from '../components/SearchBar/SearchBar';
import Slider from '../components/Slider/Slider';
import '../components/Player.css'
import { useTranslation } from 'react-i18next'; // Import i18next hook to handle language change

const Player = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <Searchbar />
      {/* <button className="Prevdata">Previous Year Data</button> */}

      {/* Add Potential Culprits Topic Here */}
      <div className="potential-culprits">
        <h2>{t('Player Data.alleged_doper')}</h2>
      </div>
      
      <Slider />
    </>
  );
};

export default Player;
