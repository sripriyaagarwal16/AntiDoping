import React from 'react';
import Searchbar from '../components/SearchBar/SearchBar';
import '../components/Player.css';
import AnalystSlider from '../components/Analysslider/analystslider';
import { useTranslation } from 'react-i18next'; // Import i18next hook to handle language change

const Analyst = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <Searchbar />
      {/* <button className="Prevdata">Previous Year Data</button> */}

      {/* Add Potential Culprits Topic Here */}
      <div className="potential-culprits">
        <h2>Analysts</h2>
      </div>
      
      <AnalystSlider />
    </>
  );
};

export default Analyst;
