import React, {/* useContext */} from "react";
//import { GlobalContext } from "../../context/index";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../store/expenseSlice";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  // const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? "+" : "-";

  const deleteTransactionHandler = () => {
    dispatch(expenseActions.deleteTransaction(transaction.id));
    //deleteTransaction(transaction.id);
  };

  return (
    <li className={transaction.amount < 0 ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {sign} ${Math.abs(transaction.amount)}{" "}
      </span>
      <button onClick={deleteTransactionHandler} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
