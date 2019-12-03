import styled from "styled-components";

const GridArea = styled.div<{ area: string }>(props => `
  grid-area: ${props.area};
`);

export default GridArea;