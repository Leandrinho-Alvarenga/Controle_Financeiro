import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  font-size: 20px;
  font-weight: bold; 
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 20px;
    height: 20px;
  }
`;
