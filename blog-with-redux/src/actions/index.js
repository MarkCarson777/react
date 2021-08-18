import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async function(dispatch, getState) {
  const response = await jsonPlaceholder.get('./posts');

  dispatch({ type: 'FTECH_POSTS', payload: response })
  };
};