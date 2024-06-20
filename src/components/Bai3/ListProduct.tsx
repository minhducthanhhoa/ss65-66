// ListProduct.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ListProduct: React.FC = () => {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const handleUpdate = (id: number) => {
    const updatedProduct = { id, productName: 'Updated Name', price: 30000, quantity: 20 };
    dispatch({ type: 'UPDATE_PRODUCT', payload: updatedProduct });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: { id } });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng (kg)</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: any) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{product.price} đ</td>
            <td>{product.quantity}</td>
            <td>
              <button onClick={() => handleUpdate(product.id)}>Sửa</button>
              <button onClick={() => handleDelete(product.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListProduct;
