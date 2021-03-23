import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../services/List/action';
import { addProduct } from '../../../services/Cart/actions';
import Product from './components/Products/Products';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import Loading from '../Loading/Loading';
import Pagination from './components/Pagination/Pagination';
import './List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      curPage: 1,
      productPerPage: 7
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

  paginate = pageNumber => {
    this.setState({ curPage: pageNumber });
  }

  goPrev = () => {
    this.setState({ curPage: this.state.curPage - 1 })
  }

  goNext = () => {
    this.setState({ curPage: this.state.curPage + 1 });
  }


  render() {
    const product = this.props.products.map(product => {
      return (

        <Product product={product} addProduct={this.props.addProduct} key={product.id} />
      );
    });

    let { curPage, productPerPage } = this.state

    const indexOfLastPost = curPage * productPerPage;
    const indexOfFirstPost = indexOfLastPost - productPerPage;
    const currentProducts = product.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        <Filter />
        <div className="list-container">
          <Sort productsLength={product.length} />
          {currentProducts}
          <Pagination
            curPage={curPage}
            productPerPage={productPerPage}
            totalProducts={product.length}
            paginate={this.paginate}
            goNext={this.goNext}
            goPrev={this.goPrev}
          />
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
  { fetchProducts, addProduct }
)(List);