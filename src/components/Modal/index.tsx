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
import { useGlobalDispatch } from '../../context'
import { ActionTypes } from '../../context/reducer'

const Slot = styled.div`
  border-radius: 8px;
  border: 1px solid gray;
  margin-right: 1em;
  padding: 1em 2em;
  user-select: none;
  width: 1em;
`

const generateRandomNumber = () => Math.floor(Math.random() * 9 + 1)

type Props = {
  open: boolean
  onClose: () => void
}

type State = string[] | number[]

function Modal(props: Props) {
  const { open, onClose } = props

  const [slots, setSlots] = React.useState<State>(['?', '?', '?'])

  const dispatch = useGlobalDispatch()

  const checkEarnings = (slots: number[]) => {
    let earnings = 0
    const number = slots.join('')
    if (number === '777') {
      earnings = 10
    } else if (number === '112' || number === '122') {
      earnings = 0.5
    } else if (number === number[0].repeat(3)) {
      earnings = 5
    }
    earnings &&
      dispatch({ type: ActionTypes.INCREMENT_BALANCE, value: earnings })
  }

  const updateSlots = (newSlots: number[]) => {
    setSlots(newSlots)
    dispatch({ type: ActionTypes.MAKE_SPIN, numbers: newSlots })
    checkEarnings(newSlots)
  }

  const onSpin = () => {
    const newSlots = [
      generateRandomNumber(),
      generateRandomNumber(),
      generateRandomNumber(),
    ]
    updateSlots(newSlots)
    dispatch({ type: ActionTypes.DECREMENT_BALANCE, value: 1 })
  }

  const onDebug = () => {
    updateSlots([7, 7, 7])
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
        <Button onClick={onDebug}>Debug</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
