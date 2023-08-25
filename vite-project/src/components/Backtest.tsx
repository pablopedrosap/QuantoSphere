import React, { useState, useEffect } from 'react';


const Backtest: React.FC = () => {

    return (
        <div>
            {/* ... your other JSX ... */}
            <div className="backtest-data">
                <p>'Waiting for data...'</p>
                <div className="equity-chart">

                </div>
                <button>Deploy Live</button>
            </div>
        </div>
    );
};

export default Backtest;
