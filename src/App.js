import "./App.css";
import React from "react";
import Modal from "./Modal/Modal";
import Noisemaker from "./Noisemaker/Noisemaker";
import styled from "styled-components";
import ShowModalButton from "./Modal/ShowModalButton";
import ModalVisProvider from "./utilities/ModalVisProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-grow: 1;
  width: auto;
  position: relative;
  z-index: 2;
`;

function App() {
  return (
    <div className="App">
      <ModalVisProvider>
        <ShowModalButton />
        <Modal />
      </ModalVisProvider>
      <Container>
        <Noisemaker />
      </Container>
    </div>
  );
}

export default App;
