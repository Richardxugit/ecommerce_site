import axios from 'axios';

const getProducts = () => {
    axios.get('./products.json')
        .then(res => {
            return res.data;

        })
        .catch(err => {
            console.log('Could not fetch products. Try again later.');
        });

}

export default getProducts;

