import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;
  margin: 50px auto;
  width: 98%;
  background-color: rgb(207, 210, 218);
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
   
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const Label = styled.label`
  font-size: 18px ;
  font-weight: bold;
  
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 6px 10px;
  font-size: 16px;
  color: #0d1d25;
  font-weight: bold;
  
  
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: #0d1d25;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 12px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #222d55;
  font-weight: normal;
  cursor: pointer;
  
`;
