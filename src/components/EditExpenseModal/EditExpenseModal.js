import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editExpenseItem,
  getExpenseItems,
} from "../../features/expenses/expensesSlice";
import "./EditExpenseModal.scss";

function EditExpenseModal({ id, itemRef, amountRef }) {
  const [input, setInput] = useState({
    id: id,
    item: itemRef,
    amount: amountRef,
  });
  console.log(input);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editExpenseItem(input))
      .unwrap()
      .then(() => {
        dispatch(getExpenseItems());
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    <form className="editModal form" onSubmit={handleSubmit}>
      <div className="form__form">
        <div className="form__input-container">
          <label className="form__label">Item</label>
          <input
            name="item"
            type="text"
            className="form__input"
            onChange={handleChange}
            value={input.item}
          ></input>
        </div>
        <div className="form__input-container">
          <label className="form__label">Amount</label>
          <input
            name="amount"
            type="number"
            className="form__input"
            onChange={handleChange}
            value={input.amount}
          ></input>
        </div>
      </div>
      <button className="form__btn">Edit</button>
    </form>
  );
}

export default EditExpenseModal;
