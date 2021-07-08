import React from 'react';

const seasonConfig = {
  summer: {
    action: 'Lets hit the beach',
    iconName: 'sun'
  },
  winter: {
    action: 'Burr its cold',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) =>{
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';  
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { action, iconName } = seasonConfig[season]

  return (
    <div>
      <i className={`massive ${iconName} icon`} />
      <h1>{action}</h1>
      <i className={`massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;