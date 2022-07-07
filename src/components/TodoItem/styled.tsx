import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  width: 100%;
  min-height: 50px;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  padding: 0px 55px;

  button {
    position: absolute;
    right: 20px;
    top: 15px;
    display: block;
    min-width: 20px;
    height: 20px;
    background-color: white;
    border: 1px solid red;
    transition: 0.1s ease;
    border-radius: 3px;

    &:hover {
      cursor: pointer;
    }

    &:active {
      background-color: red;
    }
  }

  label {
    overflow: hidden;
  }

  label p {
    margin: 0;
    padding: 10px 0;
    color: #7b7b7b;
    font-family: 'Ubuntu', sans-serif;
  }
  
  label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ span {
      background-color: #008445;
    }

    &:checked ~ span:after {
      display: block;
    }
  }

  label:hover {
    cursor: pointer;
  }

  span {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: 15px;
    left: 20px;
    height: 20px;
    width: 20px;
    border: 1px solid #008445;
    border-radius: 3px;

    &:hover {
      cursor: pointer;
    }
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
    background-color: #008445;
  }

  label span:after {
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
