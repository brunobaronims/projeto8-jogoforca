import styled from "styled-components";

export const Button = styled.button`
margin-top: 2.2rem;
font-size: 1.5rem;
width: 15rem;
height: 4.2rem;
padding: 0.6rem 0.8rem;
background: rgb(50,170,100);
border-radius: 0.7rem;
border: none;
overflow: hidden;
color: #FFF;
font-weight: bold;
filter: drop-shadow(0 0 0.05rem grey);
cursor: pointer;
transition: transform 0.1s ease-in-out;

&:hover {
  background: rgb(60,190,110);
  transform: scale(1.1);
}

&:active {
  transform: scale(1);
}

&:focus {
  outline: none;
}

@media (max-width: 928px) {
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
}
`;

export const List = styled.ul`
display: flex;
flex-direction: row;
justify-content: center;
margin: 0 0 1.6rem 0;
padding: 0;
list-style: none;

@media (max-width: 928px) {
  margin-top: 2rem;
}
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

margin-right: ${({ status }) => {
    switch (status) {
      case 'won':
        return '0.1rem';
      case 'lost':
        return '0.1rem';
      default:
        return '1rem';
    }
  }};

&:last-child {
  margin-right: 0;
}

@media (max-width: 928px) {
  font-size: 1rem;
}
`;

export const Image = styled.img`
height: auto;
width: 30rem;
overflow: hidden;

@media (max-width: 928px) {
  width: 100%;
}
`;

export const Container = styled.div`
display: flex;
margin: 2rem 0;

&:last-child {
  margin-left: 10rem;
  width: 20rem;
  flex-direction: column;
  justify-content: space-between;
}


@media (max-width: 928px) {
  justify-content: center;
  align-items: center;
  width: 60%;
  
  &:last-child {
    margin: 0;
    width: 100%;
  }
}
`;