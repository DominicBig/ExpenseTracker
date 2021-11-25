import React, { useState /*useContext */ } from "react";
//import { GlobalContext } from "../context/index";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/expenseSlice";

const AddTransaction = () => {
  // const { addTransaction } = useContext(GlobalContext);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount: +amount,
    };
    // addTransaction(newTransaction);
    dispatch(expenseActions.addTransaction(newTransaction));
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={textChangeHandler}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={amount}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
