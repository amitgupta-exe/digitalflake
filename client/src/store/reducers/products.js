
export default   (products = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...products, action.payload];
        case 'UPDATE':
            return products.map((category) => { return (category._id === action.payload._id ? action.payload : category) });
        case 'DELETE':
            return products.filter((post) => post._id !== action.payload);
        default:
            return products;
    }

}