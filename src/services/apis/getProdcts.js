import axios from 'axios';

export default () => {
    axios.get('./products.json')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log('Could not fetch products. Try again later.');
        });

}

