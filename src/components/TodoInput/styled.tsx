import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  input {
    max-width: 390px;
    width: 100%;
    border: none;
    background: #ffffff;
    border-radius: 5px 0 0 5px;
    height: 50px;
    padding: 0 20px;
    color: #7b7b7b;
    font-size: 16px;

    &:focus-visible {
      outline: none;
    }
  }

  button {
    padding: 0;
    margin: 0;
    position: relative;
    width: 60px;
    height: 50px;
    border: none;
    background-color: #fff;
    color: rgba(123, 123, 123, 0.9);
    border: 2px solid #008445;
    border-radius: 0px 5px 5px 0px;
    transition: 0.2s ease;

    &:hover {
      cursor: pointer;
    }

    &:active {
      background-color: #008445;
      color: #ffffff;
    }

    &::after {
      content: '+';
      position: absolute;
      font-size: 30px;
      line-height: 0;
      top: 50%;
      left: 0;
      right: 0;
      transition: 0.2s ease;
    }

    /* &:hover::after {
      font-size: 40px;
    } */
  }
`;
