import React from "react";

function EditExpenseModal({ itemRef, amountRef }) {
  return (
    <form className="editModal">
      <div className="editModal__form">
        <div className="editModal__label">
          Item
          <input className="editModal__input" defaultValue={itemRef}></input>
        </div>
        <div className="editModal__label">
          Amount
          <input className="editModal__input" defaultValue={amountRef}></input>
        </div>
      </div>
      <button className="editModal__btn">Update Expense</button>
    </form>
  );
}

export default EditExpenseModal;
