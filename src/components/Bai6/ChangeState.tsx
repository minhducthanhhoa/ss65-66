import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ChangeState: React.FC = () => {
  const company = useSelector((state: any) => state.company);
  const dispatch = useDispatch();

  const changeCompany = () => {
    dispatch({ type: 'CHANGE_COMPANY' });
  };

  return (
    <div>
      <h1>{company}</h1>
      <button onClick={changeCompany}>Change state</button>
    </div>
  );
};

export default ChangeState;
