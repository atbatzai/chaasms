
import React from 'react';

const HeaderSection = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-chaasms-blue">LAYER 6: MEASUREMENT &amp; SCALING</h1>
        <p className="text-chaasms-dark mt-1">KPIs, governance, optimization loop</p>
        <div className="mt-2">
          <h2 className="text-xl font-semibold text-chaasms-blue">Channel Program Control Tower</h2>
          <div className="h-1 w-64 bg-chaasms-blue rounded mx-auto mt-2"></div>
        </div>
      </div>
      
      {/* Control Tower Banner */}
      <div className="w-full bg-chaasms-blue rounded-t-lg p-3 mb-0 text-center">
        <h3 className="text-lg font-bold text-white">Channel Program Control Tower</h3>
      </div>
    </>
  );
};

export default HeaderSection;
