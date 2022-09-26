import styled from "styled-components";

export const Label = styled.label`
display: flex;
align-items: center;
font-size: 2rem;
`;

export const Guess = styled.input`
background: ${props => props.enabled ? 'rgb(210,220,230)' : 'rgb(160,160,170)'};
color: ${props => props.enabled ? 'rgb(50,50,180)' : 'rgb(100, 100, 100)'};
border: ${props => props.enabled ? '0.03rem solid rgb(100,100,180,0.4)' : 'none'};
border-radius: 0.5rem;
width: 8rem;
height: 4rem;
font-size: 1.5rem;
font-weight: bold;
margin: 0;
padding: 0;

&:focus {
  outline: none;
}
`;

export const Input = styled.input`
font-size: 1.6rem;
height: 3rem;
width: 30rem;
margin: 0 2rem;
padding: 0;
border-radius: 0.3rem;
border: 0.13rem solid black;

&:focus {
  outline: none;
}
`;

export const Form = styled.form`
display: flex;
align-items: center;
height: 4rem;
`;