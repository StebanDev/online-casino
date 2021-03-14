import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
`

function Content() {
  return (
    <Container>
      <h2>Content</h2>
    </Container>
  )
}

export default Content
