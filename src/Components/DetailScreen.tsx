import React from 'react';
import { useLocation } from 'react-router-dom';
 
const DetailsScreen = () => {
  const location = useLocation();
    const {json}=location.state;
  return (
    <div className="container">
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
};

export default DetailsScreen;
