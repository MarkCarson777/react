import React from 'react';

const getSeason = (lat, month) =>{
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';  
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const action = season === 'winter' ? 'Brr it\'s chilly' : 'Sun\'s out, gun\'s out';

  return (
    <div>
      <h1>{action}</h1>
    </div>
  );
};

export default SeasonDisplay;