import styled from "styled-components";

export const Letter = styled.li`
background: ${props => props.enabled ? 'rgb(210,220,230)' : 'rgb(160,160,170)'};
color: ${props => props.enabled ? 'rgb(50,50,180)' : 'rgb(100, 100, 100)'};
border: ${props => props.enabled ? '0.03rem solid rgb(100,100,180,0.4)' : 'none'};
cursor: ${props => props.enabled ? 'pointer' : 'initial'};
display: flex;
justify-content: center;
border-radius: 0.5rem;
margin-right: 0.4rem;
align-items: center;
padding: 0;
width: 4rem;
height: 4rem;
font-size: 1.2rem;
font-weight: bold;
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

&:last-child {
  margin: 0;
}

@media (max-width: 928px) {
  border-radius: 0.2rem;
  height: 2.5rem;
  min-width: 0.8rem;
  margin-right: 0.15rem;
  font-size: 0.8rem;

  &:last-child {
    margin-right: 1rem;
  }

  &:first-child {
    margin-left: 1rem;
  }
}
`;

export const Container = styled.ul`
display: flex;
justify-content: center;
align-items: center;
list-style: none;
margin: 0 0 1rem 0;
padding: 0;
width: 58rem;

@media (max-width: 928px) {
  width: 100%;
}
`;