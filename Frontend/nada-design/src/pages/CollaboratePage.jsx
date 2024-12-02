import React from 'react';
import Header from '../components/Header/Header';
import Calendar from '../components/Calender/Calender';
import CaseCard from '../components/CaseCard/CaseCard';
import AffiliatesList from '../components/AffiliatesList/AffiliatesList';
import '../components/CollaboratePage.css'
function CollaboratePage() {
    return (
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Calendar />
          <CaseCard />
          <AffiliatesList />
        </div>
      </div>
    );
  }
  
  export default CollaboratePage;