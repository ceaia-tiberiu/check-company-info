import { COMPANIES, FETCH_DESCRIPTION, FETCH_NEWS } from './types';

const IEXAPI = 'https://api.iextrading.com/1.0';
/**
 * fetches the companies description from the api
 */
export const fetchDescription = () => dispatch => {
  try {
    Promise.all(
      COMPANIES.map(comp => getCompDataFromUrl(comp, 'company')),
    ).then(descriptions => {
      dispatch({
        type: FETCH_DESCRIPTION,
        payload: descriptions,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetches the company articles from the last month from the api
 */
export const fetchArticles = () => dispatch => {
  try {
    Promise.all(COMPANIES.map(comp => getCompDataFromUrl(comp, 'news'))).then(
      allNews => {
        let articles = allNews.map((news, index) => ({
          news: { symbol: COMPANIES[index], articles: news },
        }));
        dispatch({
          type: FETCH_NEWS,
          payload: articles,
        });
      },
    );
  } catch (error) {
    console.error(error);
  }
};

/**
 * Creates the url and makes the fetch for Promise.all
 */
const getCompDataFromUrl = (compSymbol, details) => {
  let url = IEXAPI + '/stock/' + compSymbol + '/' + details;
  return fetch(url).then(r => r.json());
};
