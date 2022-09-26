import styled from "styled-components";

export const Letter = styled.button`
background: ${props => props.enabled ? 'rgb(210,220,230)' : 'rgb(160,160,170)'};
color: ${props => props.enabled ? 'rgb(50,50,180)' : 'rgb(100, 100, 100)'};
border: ${props => props.enabled ? '0.03rem solid rgb(100,100,180,0.4)' : 'none'};
border-radius: 0.5rem;
width: 4rem;
height: 4rem;
font-size: 1.2rem;
font-weight: bold;

&:not(last-child) {
  margin-right: 0.4rem;
}
`;

export const Container = styled.ul`
display: flex;
justify-content: center;
list-style: none;
margin: 0;
padding: 0;
margin-bottom: 1rem;
width: 58rem;
`;