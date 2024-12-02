import React from 'react';
import './SearchBar.css';
import { useTranslation } from 'react-i18next'; // Import i18next hook to handle language change

const SearchBar = () => {
    const { t } = useTranslation(); 

    return (
        <div className="nav-right">
            <input
                type="text"
                placeholder="Search the Players..."
                className="search-bar"
            />
            <button className="search-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    width="24"
                    height="24"
                >
                    <path
                        d="M11 2a9 9 0 016.36 15.36l4.7 4.7a1 1 0 01-1.42 1.42l-4.7-4.7A9 9 0 1111 2zm0 2a7 7 0 100 14 7 7 0 000-14z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <a href="/prevdata" className="Prevdata">{t('Player Data.prevyear')}</a>
            </div>

    );
};

export default SearchBar;
