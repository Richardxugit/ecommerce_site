import React, { Component } from "react";
import './Pagination.scss'

class Pagination extends Component {

  componentDidMount() {
    this.create()
  }

  create() {
    const { productPerPage, totalProducts, curPage } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
      pageNumbers.push(i);
    }

    let pages = [];

    pages.push(<li onClick={this.handlegoPrev.bind(this)}
      className={curPage === 1 ? "nomore" : ""} key={0}>Pre</li>)

    for (let i = 1; i <= pageNumbers.length; i++) {
      pages.push(<li onClick={this.handlePaginate.bind(this, i)} className={curPage === i ? "active" : ""} key={i}>{i}</li>)
    }

    pages.push(<li onClick={this.handlegoNext.bind(this)} key={pageNumbers.length + 1}
      className={curPage === pageNumbers.length ? "nomore" : ""}>next</li>)

    return pages;
  }

  handlePaginate = i => {
    this.props.paginate(i)
  }
  handlegoPrev() {
    this.props.goPrev()
  }

  handlegoNext() {
    this.props.goNext()
  }

  render() {
    const Pages = this.create.bind(this)();
    return (
      <div className="main">
        <ul className="page">
          {Pages}
        </ul>
      </div>)


  }
};

export default Pagination;