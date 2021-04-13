import React from 'react';
import ForecastFiveDays from './ForecastFiveDays';

const ForecastWrapper = ({ sortField, sortDirection, setSortDirectionField, setSortField }) => {
    return (
        <div>
            <hr/>
            <ForecastFiveDays
                sortField={sortField}
                sortDirection={sortDirection}
                setSortDirectionField={setSortDirectionField}
                setSortField={setSortField}
            />
        </div>
    );
};

export default ForecastWrapper;
