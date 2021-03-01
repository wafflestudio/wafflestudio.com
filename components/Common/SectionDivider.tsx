import styled from 'styled-components'
import { Colors } from 'util/constant'

const SectionDivider = styled.div`
  width: 680px; 
  height: 6px;
  background: ${Colors.backDark};
  border-radius: 25px;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    width: 80vw;
    margin-top: 10vmin;
    margin-bottom: 10vmin;
  }
`

export default SectionDivider