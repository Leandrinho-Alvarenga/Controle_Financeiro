import { useState } from "react";
import Grid from "../Grid";
import PropTypes from 'prop-types';
import * as C from "./styles";
 


const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {

  const [people, setPeople] = useState("")
  const [age, setAge] = useState("")
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000); //gera um ID para as transações

  // Salva os dados do inputGroup
  const handleSave = () => {
    if ( !people || !age || !desc || !amount) {
      alert("Informe seu nome sua idade, descrição e o valor");
      return;
    } else if (amount & age <= 0) {
      alert("O valor tem que ser positivo!");
      return;
    }else if(age < 18 && !isExpense){
      alert("Menores de 18 anos não podem adicionar entradas de valor!")
      return;
    }

    const transaction = {
      id: generateID(),
      people: people,
      age: age,
      desc: desc,
      amount: amount,
      expense: isExpense,
    };
    
    handleAdd(transaction);
    setTransactionsList([...transactionsList, transaction]);

    setPeople("")
    setAge("")
    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        {/* Pessoas */}
        <C.InputContent>
          <C.Label>Pessoas</C.Label>
          <C.Input value={people} onChange={(e) => setPeople(e.target.value)} />
        </C.InputContent>
        {/* Idade */}
        <C.InputContent>
          <C.Label>Idade</C.Label>
          <C.Input value={age} type="number" onChange={(e) => setAge(e.target.value)} />
        </C.InputContent>
          {/* Descrição */}
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
            {/* Valor */}
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

Form.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  transactionsList: PropTypes.array.isRequired,
  setTransactionsList: PropTypes.func.isRequired,
};

export default Form;
