import "./App.css";
import Noisemaker from "./Noisemaker/Noisemaker";
import styled from "styled-components";

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
`

function App() {
  return (
    <div className="App">
      <Container>
        <Noisemaker />
      </Container>
    </div>
  );
}

export default App;
