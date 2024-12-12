import React, { useState } from 'react';
import axios from 'axios';
import './App.css';  // Import the updated CSS

const App = () => {
    const [bloodData, setBloodData] = useState({
        WBCs_x10_9_per_L: '',
        Neutrophils_Percent: '',
        Lymphocytes_Percent: '',
        Monocytes_Percent: '',
        Eosinophils_Percent: '',
        Basophils_Percent: '',
        RBCs_trillion_per_L: '',
        Hemoglobin_g_per_dL: '',
        Hematocrit_Percent: '',
        Platelets_billion_per_L: '',
    });
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBloodData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to Flask backend
            const response = await axios.post('http://127.0.0.1:5000/predict', bloodData);
            setPrediction(response.data.prediction);  // Set prediction result
        } catch (err) {
            setError(err.response ? err.response.data.error : 'Something went wrong!');
        }
    };

    return (
        <div className="blood-container">
            <h1>Blood Report Doping Risk Prediction</h1>
            <form onSubmit={handleSubmit} className="blood-report-form">
                <div className="input-group">
                    <label>WBCs (x10^9/L):</label>
                    <input type="number" name="WBCs_x10_9_per_L" value={bloodData.WBCs_x10_9_per_L} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Neutrophils (%):</label>
                    <input type="number" name="Neutrophils_Percent" value={bloodData.Neutrophils_Percent} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Lymphocytes (%):</label>
                    <input type="number" name="Lymphocytes_Percent" value={bloodData.Lymphocytes_Percent} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Monocytes (%):</label>
                    <input type="number" name="Monocytes_Percent" value={bloodData.Monocytes_Percent} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Eosinophils (%):</label>
                    <input type="number" name="Eosinophils_Percent" value={bloodData.Eosinophils_Percent} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Basophils (%):</label>
                    <input type="number" name="Basophils_Percent" value={bloodData.Basophils_Percent} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>RBCs (trillion/L):</label>
                    <input type="number" name="RBCs_trillion_per_L" value={bloodData.RBCs_trillion_per_L} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Hemoglobin (g/dL):</label>
                    <input type="number" name="Hemoglobin_g_per_dL" value={bloodData.Hemoglobin_g_per_dL} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Hematocrit (%):</label>
                    <input type="number" name="Hematocrit_Percent" value={bloodData.Hematocrit_Percent} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Platelets (billion/L):</label>
                    <input type="number" name="Platelets_billion_per_L" value={bloodData.Platelets_billion_per_L} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-btn">Analyze Report</button>
            </form>

            {prediction && <div className="prediction"><h2>Prediction: {prediction}</h2></div>}
            {error && <div className="error"><h2>Error: {error}</h2></div>}
        </div>
    );
};

export default App;
