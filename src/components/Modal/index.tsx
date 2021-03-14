import * as React from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core'
import styled from 'styled-components'

const Slot = styled.div`
  border-radius: 8px;
  border: 1px solid gray;
  margin-right: 1em;
  padding: 1em 2em;
  user-select: none;
  width: 1em;
`

type Props = {
  open: boolean
  onClose: () => void
}

type State = string[] | number[]

function Modal(props: Props) {
  const { open, onClose } = props

  const [slots, setSlots] = React.useState<State>(['?', '?', '?'])

  const generateRandomNumber = () => Math.floor(Math.random() * 9 + 1)

  const onSpin = () => {
    setSlots([
      generateRandomNumber(),
      generateRandomNumber(),
      generateRandomNumber(),
    ])
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Play Game</DialogTitle>
      <DialogContent>
        <Box display="flex">
          <Slot>
            <Typography variant="h5">{slots[0]}</Typography>
          </Slot>
          <Slot>
            <Typography variant="h5">{slots[1]}</Typography>
          </Slot>
          <Slot>
            <Typography variant="h5">{slots[2]}</Typography>
          </Slot>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onSpin}>Spin</Button>
        <Button>Debug</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
