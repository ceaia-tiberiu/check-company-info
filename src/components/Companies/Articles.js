import React from 'react';
import moment from 'moment';

export default ({ datetime, headline, source, url, summary }) => {
  return (
    <div className="article-container">
      <h5>
        <a href={url} target="_blanl">
          {headline}
        </a>
      </h5>
      <span className="added">
        Added: - {moment(datetime).format('MMMM Do YYYY')} - Source: {source}
      </span>
      <p className="summary">{summary}</p>
    </div>
  );
};
