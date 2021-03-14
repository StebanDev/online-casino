import { AppBar, Avatar, Box, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const LogoContainer = styled.div`
  flex-grow: 1;
`

const StyledAvatar = styled(Avatar)`
  background-color: purple;
  margin-left: 1rem;
`

const StyledLogo = styled.img`
  height: 80px;
`

function Header() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <a href="/">
              <StyledLogo src={logo} />
            </a>
          </LogoContainer>
          <Box display="flex" alignItems="center">
            <Typography>Balance: $10.00</Typography>
            <StyledAvatar>EC</StyledAvatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Header
