import React from 'react';
import Searchbar from '../components/SearchBar/SearchBar';
import '../components/Player.css';
import InvestigationSlider from '../components/InvestigatorSlider/InvestigatorSlider';
import { useTranslation } from 'react-i18next'; // Import i18next hook to handle language change

const Investigator = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <Searchbar />
      {/* <button className="Prevdata">Previous Year Data</button> */}

      {/* Add Potential Culprits Topic Here */}
      <div className="potential-culprits">
        <h2>Investigator</h2>
      </div>
      
      <InvestigationSlider />
    </>
  );
};

export default Investigator;
