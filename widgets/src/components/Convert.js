import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
useEffect(() => {
  // first object is left empty as we don't want to send any information in the body in the post request
  // we create a third argument/second object for query string parameters
  axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
    params: {
      q: text,
      target: language.value,
      key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    }
  })
}, [language, text]);

  return <div />
};

export default Convert;