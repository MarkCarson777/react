export default (state = [], action) => {
//   if (action.type === 'FETCH_POSTS') {
//     return action.payload;
//   }
// 
//   return state;

  // switch is a valid JS function that does the same as the above
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
