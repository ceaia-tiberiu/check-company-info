import React from 'react';
import './style.css';
import Description from './Description';
import Articles from './Articles';

export default ({ description, articles }) => {
  return (
    <div className="company">
      <Description {...description} />
      <div className="company-articles">
        <h4>Articles: </h4>
        {articles.map(article => (
          <Articles key={article.datetime} {...article} />
        ))}
      </div>
    </div>
  );
};
