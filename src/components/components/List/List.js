import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../../services/List/action';

import Product from './components/Products/Products';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import Loading from '../Loading/Loading';

import './List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { filters: nextFilters, sort: nextSort } = nextProps;

    if (nextFilters !== this.props.filters) {
      this.handleFetchProducts(nextFilters, undefined);
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined, nextSort);
    }
  }

  handleFetchProducts = (
    filters = this.props.filters,
    sort = this.props.sort
  ) => {
    this.setState({ loading: true });
    this.props.fetchProducts(filters, sort, () => {
      this.setState({ loading: false });
    });
  };

  render() {
    const product = this.props.products.map(product => {
      return (
        
        <Product product={product} key={product.id} />
      );
    });

    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        <Filter />
        <div className="list-container">
          <Sort productsLength={product.length} />
          {product}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.list.products,
  filters: state.filters.items,
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(List);