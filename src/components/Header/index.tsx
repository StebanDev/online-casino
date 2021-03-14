import * as React from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { useGlobalDispatch, useGlobalState } from '../../context'
import { ActionTypes } from '../../context/reducer'

const LogoContainer = styled.div`
  flex-grow: 1;
`

const StyledAvatar = styled(Avatar)`
  background-color: purple;
  margin-left: 1rem;
  margin-right: 0.5rem;
`

const StyledLogo = styled.img`
  height: 80px;
`

const StyledButton = styled(Button)`
  border-color: white;
  color: white;
`

function Header() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [username, setUsername] = React.useState('')

  const state = useGlobalState()
  const dispatch = useGlobalDispatch()

  console.log('state', state.username)

  const onLogin = () => {
    dispatch({ type: ActionTypes.LOGIN_USER, username })
    setIsModalOpen(false)
  }

  const onLogout = () => {
    dispatch({ type: ActionTypes.LOGOUT_USER })
  }

  const onModalClose = () => setIsModalOpen(false)

  const avatarString = state.username
    .toUpperCase()
    .split(' ')
    .map((e) => e[0])
    .join('')

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <a href="/">
              <StyledLogo src={logo} />
            </a>
          </LogoContainer>
          {state.username ? (
            <Box display="flex" alignItems="center">
              <Typography>Balance: ${state.balance.toFixed(2)}</Typography>
              <StyledAvatar>{avatarString}</StyledAvatar>
              <StyledButton onClick={onLogout}>Log out</StyledButton>
            </Box>
          ) : (
            <StyledButton
              variant="outlined"
              onClick={() => setIsModalOpen(true)}
            >
              Login
            </StyledButton>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Dialog open={isModalOpen} onClose={onModalClose}>
        <DialogContent>
          <TextField
            autoFocus
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onLogin}>Login</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Header
