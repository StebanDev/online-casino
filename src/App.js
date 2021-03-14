import { Container } from '@material-ui/core'
import styled from 'styled-components'
import { Content, Footer, Header } from './components'
import { StateProvider } from './context'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

function App() {
  return (
    <StateProvider>
      <Container>
        <FlexContainer>
          <Header />
          <Content />
          <Footer />
        </FlexContainer>
      </Container>
    </StateProvider>
  )
}

export default App
