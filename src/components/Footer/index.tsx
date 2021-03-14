import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'

const StyledAppbar = styled(AppBar)`
  bottom: 0;
  top: auto;
`

function Footer() {
  return (
    <>
      <StyledAppbar>
        <Toolbar>
          <Typography variant="body2">
            Copyright 2021 - Casino Online
          </Typography>
        </Toolbar>
      </StyledAppbar>
      <Toolbar />
    </>
  )
}

export default Footer
