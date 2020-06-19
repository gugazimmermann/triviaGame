/**
 * The API call to fetch the questions for the quiz game.
 * Change .env file to modify the url or the params.
 */

export const fetchQuestions = () => {
  return fetch(process.env.REACT_APP_QUIZ_API_URL)
    .then((res) => res.json())
    .then((result) => result)
    .catch((err) => err);
};
