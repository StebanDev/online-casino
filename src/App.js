import { Container } from '@material-ui/core'
import styled from 'styled-components'
import { Content, Footer, Header } from './components'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

function App() {
  return (
    <Container>
      <FlexContainer>
        <Header />
        <Content />
        <Footer />
      </FlexContainer>
    </Container>
  )
}

export default App
