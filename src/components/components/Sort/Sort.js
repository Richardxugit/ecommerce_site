import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSort } from '../../../services/Sort/action';
import Options from './components/Options/Options';
import './Sort.scss';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' }
];

class Sort extends Component {

  handleSort = value => {
    this.props.updateSort(value);
  };

  render() {
    return (
      <div className="sort">
        Order by
        <Options options={sortBy} handleOnChange={this.handleSort} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);