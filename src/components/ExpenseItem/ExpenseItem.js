import React, { useRef, useState } from "react";
import "./ExpenseItem.scss";
import { useDispatch } from "react-redux";
import {
  deleteExpenseItem,
  getExpenseItems,
} from "../../features/expenses/expensesSlice";
import EditExpenseModal from "../EditExpenseModal/EditExpenseModal";

const ExpenseItem = ({ id, item, amount }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const itemRef = useRef();
  const amountRef = useRef();

  const handleClick = () => {
    dispatch(deleteExpenseItem(id))
      .unwrap()
      .then(() => {
        dispatch(getExpenseItems());
      })
      .catch((err) => console.log(err));
  };

  const openModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="expenses">
        <p className="expenses__item" ref={itemRef}>
          {item}
        </p>
        <p className="expenses__amount" ref={amountRef}>
          {amount}
        </p>
        <button onClick={handleClick}>remove</button>
        <button onClick={openModal}>edit</button>
      </div>
      {isModalOpen && (
        <EditExpenseModal
          itemRef={itemRef.current.textContent}
          amountRef={amountRef.current.textContent}
        />
      )}
    </>
  );
};

export default ExpenseItem;
