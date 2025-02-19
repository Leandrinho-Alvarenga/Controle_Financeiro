import * as C from "./styles";
import PropTypes from 'prop-types';
import GridItem from "../GridItem";


const Grid = ({ itens, setItens }) => {
  //Deletando uma transação do grid e do LocalStorage
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
        <C.Th width={20}>Pessoa</C.Th>
        <C.Th width={20}>Idade</C.Th>
          <C.Th width={20}>Descrição</C.Th>
          <C.Th width={20}>Valor</C.Th>
          <C.Th width={10} $alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {(itens ?? []).map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

Grid.propTypes = {
  itens: PropTypes.array.isRequired,
  setItens: PropTypes.func.isRequired,
};

export default Grid;
