import styled from '@emotion/styled';

export const Header = styled.header`
display: block;
width: 100%;
margin: 0 auto;
padding: 10px;
background-color: #3f51b5;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);`

export const SearchForm = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 3px;
  overflow: hidden;
`

export const Button = styled.button`
  padding: 8px;
  width: 60px;
  height: 35px;
  border: 0;
  border-radius: 10%;
  background-color: #fff;
  cursor: pointer;
  outline: none;
  :hover {
  scale: 1.1;
}
` 


export const ButtonLabel = styled.span`
 font: inherit;
font-size: 20px;
` 

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 35px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 5px;

  :placeholder {
    font: inherit;
    font-size: 18px;}
  `