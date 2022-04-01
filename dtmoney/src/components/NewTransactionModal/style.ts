import styled from "styled-components";
<<<<<<< HEAD
import { darken, transparentize } from 'polished'
=======
import { darken } from 'polished'
>>>>>>> caa1ae67c21c254487d518c8c96e26b33f61c088

export const Cointainer = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    transition: border-color 0.2s;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    &:focus {
    box-shadow: 0 0 0 0;
    border-color: ${darken(0.1, '#d7d7d7')};
    outline: 0;
  } 
    &[type="number"] {
      -moz-appearance: textfield;
    }
    &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

  }


  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
<<<<<<< HEAD
    
  }
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red'
}

const color = {
  red: '#E52E4D',
  green: '#33cc95',
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive ? transparentize(0.9, color[props.activeColor]) : 'transparent'};
=======
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: transparent;
>>>>>>> caa1ae67c21c254487d518c8c96e26b33f61c088

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
<<<<<<< HEAD
=======
  }
>>>>>>> caa1ae67c21c254487d518c8c96e26b33f61c088
`;