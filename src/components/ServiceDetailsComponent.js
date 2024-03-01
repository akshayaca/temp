import React from 'react';
import '../css/App.css'

const ServiceDetailsComponent = () => {
    return (
        <div className="service-details">
            <div className="top-section">
                    <h2>Images from db </h2>
            </div>
            <div className="bottom-section">
                <div className="details-left"><h2> Detais about reserved property and description</h2>
                </div>
                <div className="details-right">
                <h2>Service Allocation Detials</h2>
                    <div className="submit-report-container">
                        <button className="submit-report-button">Submit Report</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsComponent;
