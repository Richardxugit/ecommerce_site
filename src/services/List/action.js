import axios from 'axios';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  return axios
    .get('./products.json')
    .then(res => {
      const products = res.data;

      if (!!filters && filters.length > 0) {
        products = products.filter(p =>
          filters.find(f => p.typeVariant.find(size => size === f))
        );
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log(err);
    });
}