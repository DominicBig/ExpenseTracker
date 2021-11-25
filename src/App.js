import "./index.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/transactions/TransactionList";
import AddTransaction from "./components/AddTransaction";
//import { GlobalProvider } from "./context/index";



function App() {
  return (
    //<GlobalProvider>
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      </>
   // </GlobalProvider>
  );
}

export default App;
