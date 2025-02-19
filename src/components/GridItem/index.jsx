import * as C from "./styles";
import PropTypes from 'prop-types';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";


const GridItem = ({ item, onDelete }) => {
  

  return (
    <C.Tr>
       <C.Td>{item.people ?? "Desconhecido"}</C.Td>
       <C.Td>{item.age ?? "Sem idade"}</C.Td>
      <C.Td>{item.desc ?? " Sem descrição"}</C.Td>
      <C.Td>{item.amount ?? "Sem valor"}</C.Td>
      <C.Td $alignCenter>
        {item?.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td $alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default GridItem;