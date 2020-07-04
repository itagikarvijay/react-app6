import axios from '../../util/API';

class ProductService {

    async getAll() {
        console.log("ProductService")
        return await axios.get('/api/product/products');
    }
}

export default ProductService;