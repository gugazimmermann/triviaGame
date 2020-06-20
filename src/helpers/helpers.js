import he from 'he'

/**
 * Format the API response to be used in the app.
 * Here we use the library he (https://github.com/mathiasbynens/he)
 * just to decodes the questions's HTML entities.
 *
 * The result is a Array of Objects like this:
 * [{
 *  "category": "General Knowledge",
 *  "question": "This is the correct spelling of \"Supercalifragilisticexpialidocious\".",
 *  "correct_answer": true,
 *  "user_answer": null
 * }]
 */
export const formatQuestions = (result) => {
  return result.results.map((r) => {
    return {
      category: r.category,
      question: he.decode(r.question),
      correct_answer: r.correct_answer === 'True',
      user_answer: null
    }
  })
}
