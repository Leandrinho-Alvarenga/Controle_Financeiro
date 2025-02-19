import { useEffect, useState } from "react";

import GlobalStyle from "../styles/global";
import Header from "../components/Header";
import Resume from "../components/Resume";
import Form from "../components/Form";


const App = () => {

  //Amazeando os dados no LocalStorage
  const data = localStorage.getItem("transactions");

  let parsedData = [];
try {
  parsedData = data ? JSON.parse(data) : [];
  if (!Array.isArray(parsedData)) parsedData = [];
} catch (error) {
  console.error("Erro ao analisar localStorage:", error);
  localStorage.removeItem("transactions"); // Limpa se estiver corrompido
  parsedData = [];
}


  const [transactionsList, setTransactionsList] = useState(parsedData);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  //Calculando as entradas, saídas e o Total
  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
    
    // Tratando um erro no LocalStorage
    try {
      if (transactionsList.length > 0) {
        localStorage.setItem("transactions", JSON.stringify(transactionsList));
      }
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [transactionsList]);
  
  //Criando uma nova transação para ser enviada ao localStorage
  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };
 
  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};
export default App;

