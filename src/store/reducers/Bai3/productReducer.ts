interface Product {
    id: number;
    productName: string;
    price: number;
    quantity: number;
  }
  
  interface ProductState {
    products: Product[];
  }
  
  const initialState: ProductState = {
    products: [
      { id: 1, productName: 'Cam sành', price: 20000, quantity: 10 },
      { id: 2, productName: 'Bưởi ba roi', price: 50000, quantity: 15 },
    ],
  };
  
  const productReducer = (state = initialState, action: any): ProductState => {
    switch (action.type) {
      case 'UPDATE_PRODUCT':
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, ...action.payload }
              : product
          ),
        };
      case 'DELETE_PRODUCT':
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  