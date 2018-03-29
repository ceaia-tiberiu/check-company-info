import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { fetchDescription, fetchArticles } from './actions/companiesActions';
import { COMPANIES } from './actions/types';
import { connect } from 'react-redux';
import Loader from './components/Loader';
import Company from './components/Companies';

class App extends React.PureComponent {
  componentDidMount = () => {
    this.props.fetchDescription();
    this.props.fetchArticles();
  };

  /**
   * Merges the data into one object based on company symbol
   */
  mergeData = (arr1, arr2) => {
    let temp = {};
    let result = {};
    arr1.forEach(val => {
      temp[val.symbol.toLowerCase()] = { description: val };
    });
    arr2.forEach(val => {
      result[val.news.symbol.toLowerCase()] = val.news;
    });
    Object.keys(temp).map(val => {
      if (result.hasOwnProperty(val)) {
        result[val].description = temp[val].description;
      }
    });
    return result;
  };

  render() {
    if (this.props.description.length === 0) {
      return <Loader />;
    }
    const companyDetails = this.mergeData(
      this.props.description,
      this.props.news,
    );
    return (
      <div>
        {Object.keys(companyDetails).map(company => (
          <Company
            key={company}
            articles={companyDetails[company].articles}
            description={companyDetails[company].description}
          />
        ))}
      </div>
    );
  }
}

App.proptypes = {
  fetchDescription: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  description: PropTypes.array.isRequired,
  news: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  description: state.companies.description,
  news: state.companies.news,
});

export default connect(mapStateToProps, {
  fetchDescription,
  fetchArticles,
})(App);
