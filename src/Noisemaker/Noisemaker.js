import React from "react";
import styled from 'styled-components';
import "./noisemaker.css";
import { border, color, flexbox, grid, layout, space } from 'styled-system';
import Grid from './Grid/Grid'
import Controls from './Controls/Controls'
import VampProvider from "../utilities/VampProvider";

import ToneProvider from "../utilities/ToneProvider";

const Container = styled.section`
  ${border}
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${space}
`

const StyledGrid = styled(Grid)`
  ${grid}
  ${layout}
  ${space}
`

const Noisemaker = (props) => {

  return (
    <VampProvider>
      <ToneProvider>
        <Container className="noisemaker" {...props} bg="#3b3c36" justifyContent="center" mx="1em" borderRadius="12px" display="grid" gridTemplateColumns="4fr 2fr" gridTemplateAreas={' "tones controls" '}>
            <StyledGrid gridArea="tones" my="auto" rowCount={9} beatCount={16} p=".5em 1em 1em 1em" colors={{primary: '#38CC77', secondary: '#DE4839'}} />
          <Controls gridArea="controls"/>
        </Container>
      </ToneProvider>
    </VampProvider>
  );
};

export default Noisemaker;