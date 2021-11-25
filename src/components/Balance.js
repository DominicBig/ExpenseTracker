import React /* useContext*/ from "react";
//import { GlobalContext} from "../context/index";
import { useSelector } from "react-redux";

const Balance = () => {
  const transactions = useSelector((state) => state.transaction.transactions);
  const amounts = transactions.map((transaction) => transaction.amount);
  //const { transactions } = useContext(GlobalContext);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1> ${total}</h1>
    </>
  );
};

export default Balance;