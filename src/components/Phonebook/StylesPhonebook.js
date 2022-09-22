import styled from 'styled-components';

export const StylesPhonebook = styled.div`
 display: flex;
  flex-direction: column; 
  align-items: center;
  margin: 40px;
  font-weight: 500;
  font-size: 16px;
  color: #3b5998;

  a {
    text-decoration: none; 
    color: #3b5998;
  }

  .contacts {
    border: 1px solid black;
    display: inline-flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    text-align: center;
  }

  h1 {
    margin-top: 0px;
    font-size: 24px;
    color: #3b5998;
  }

  .spanP {
    display: inline-block;
    width: 25px;
    height: 32px;
    color: #ffff;
    background-color: #3b5998;
    border-radius: 3px;
    text-align: end;
    padding-right: 2px;
  }

  .contacts__name input {
    margin-left: 20px;
  }

  .contacts__number input {
    margin-left: 4px;
  }

  .contacts__list {
    padding: 0px;
    list-style: none;
  }

  .contacts__item {
    text-align: start;
    position: relative;
    font-weight: 600;
    color: #3b5998;
    padding-left: 2px;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      background-color: #3b5998;
      color: #ffffff;
      a {
        color: #ffffff;
      }
    }
  }

  .contacts__item-del {
    position: absolute;
    top: 2px;
    right: 1px;
    display: inline-flex;
    font-size: 10px;
    font-weight: 500;

    :hover {
      border-radius: 3px;
      border-color: #6685c4;
      background-color: #6685c4;
      color: #ffffff;
    }
  }

  .contacts__button {
    margin-top: 20px;
    font-weight: 500;
    position: relative;
    left: -10px;

    :hover {
      border-radius: 3px;
      border-color: #3b5998;
      background-color: #3b5998;
      color: #ffffff;
    }
  }
  .filter {
    margin-top: 20px;
    display: inline-flex;
    flex-direction: column;
  }  
`;
