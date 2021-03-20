import axios from 'axios'

const getProducts = () => {
    axios.get('./products.json')
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        });

}

export default getProducts;
