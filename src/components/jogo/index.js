import styled from "styled-components";

export const Button = styled.button`
margin-top: 2.8rem;
font-size: 1.5rem;
width: 15rem;
height: 5rem;
padding: 0.6rem 0.8rem;
background: rgb(50,170,100);
border-radius: 0.7rem;
border: none;
color: #FFF;
font-weight: bold;
filter: drop-shadow(0 0 0.05rem grey);
`;

export const List = styled.ul`
display: flex;
flex-direction: row;
margin: 0 0 1.6rem 0;
padding: 0;
list-style: none;
overflow: hidden;
text-overflow: ellipsis;
`;

export const Letter = styled.li`
font-size: 2rem;
font-weight: bold;
color: ${({ status }) => {
    switch (status) {
      case 'won':
        return 'green';
      case 'lost':
        return 'red';
      default:
        return 'black';
    }
  }
  };

&:not(last-child) {
  margin-right: ${({ status }) => {
    switch (status) {
      case 'won':
        return '0.1rem';
      case 'lost':
        return '0.1rem';
      default:
        return '1rem';
    }
  }}
}`;

export const Container = styled.div`
display: flex;

&:last-child {
  margin-left: 10rem;
  width: 20rem;
  flex-direction: column;
  justify-content: space-between;
}
`;