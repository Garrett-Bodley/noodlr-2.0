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

const majorPenta = ["F4", "D4", "C4", "A3", "G3", "F3", "C1", "D1", "E1"]
const minorPenta = ["F4", "Eb4", "C4", "Bb3", "Ab3", "F3", "C1", "D1", "E1"]
const majorScale = ["D4", "C4", "Bb3", "A3", "G3", "F3", "C1", "D1", "E1"]

function App() {
  return (
    <div className="App">
      <ModalVisProvider>
        <ShowModalButton />
        <Modal />
      </ModalVisProvider>
      <Container>
        <Noisemaker beatCount={16} pitches={minorPenta} />
      </Container>
    </div>
  );
}

export default App;
