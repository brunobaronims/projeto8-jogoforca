import styled from "styled-components";

export const Label = styled.label`
display: flex;
align-items: center;
font-size: 2rem;

@media (max-width: 928px) {
  width: 60%;
  margin: 2rem 0;
  justify-content: center;
}
`;

export const Button = styled.input`
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
cursor: ${props => props.enabled ? 'cursor': 'initial'};
transition: transform 0.1s ease-in-out;


&:hover {
  background: ${props => props.enabled ? 'rgb(220,230,250)' : 'rgb(160,160,170)'};
  transform: ${props => props.enabled ? 'scale(1.1)': 'none'};
}

&:active {
  transform: ${props => props.enabled ? 'scale(1)': 'none'};
}

&:focus {
  outline: none;
}
`;

export const Input = styled.input`
background: ${props => props.enabled ? 'initial' : 'rgb(160,160,170)'};
font-size: 1.6rem;
height: 3rem;
width: 30rem;
margin: 0 2rem;
padding: 0;
border-radius: 0.3rem;
border: ${props => props.enabled ? '0.13rem solid rgb(120,120,120)' : 'none'};
color: ${props => props.enabled ? 'rgb(40,40,40)' : 'rgb(160,160,170)'};
cursor: ${props => props.enabled ? 'text' : 'default'};
spellcheck: false;

&:focus {
  outline: none;
}

@media (max-width: 928px) {
  text-align: center
}
`;

export const Form = styled.form`
display: flex;
align-items: center;

@media (max-width: 928px) {
  width: 100%;
  flex-direction: column;
}
`;

export const Text = styled.p`
color: rgb(40,40,40);

@media (max-width: 928px) {
  display: none;
}
`;