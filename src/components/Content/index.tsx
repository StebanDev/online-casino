import * as React from 'react'
import styled from 'styled-components'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { Box, Button } from '@material-ui/core'
import { Modal } from '..'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Id',
    width: 100,
  },
  {
    field: 'slot1',
    headerName: 'Slot #1',
    width: 120,
    sortable: false,
  },
  {
    field: 'slot2',
    headerName: 'Slot #2',
    width: 120,
    sortable: false,
  },
  {
    field: 'slot3',
    headerName: 'Slot #3',
    width: 120,
    sortable: false,
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 200,
  },
]

const rows = [
  { id: 1, slot1: 2, slot2: 4, slot3: 8, time: '09:00' },
  { id: 2, slot1: 2, slot2: 4, slot3: 8, time: '10:00' },
  { id: 3, slot1: 2, slot2: 4, slot3: 8, time: '10:00' },
  { id: 4, slot1: 2, slot2: 4, slot3: 8, time: '08:00' },
  { id: 1, slot1: 2, slot2: 4, slot3: 8, time: '09:00' },
  { id: 2, slot1: 2, slot2: 4, slot3: 8, time: '10:00' },
  { id: 3, slot1: 2, slot2: 4, slot3: 8, time: '10:00' },
  { id: 4, slot1: 2, slot2: 4, slot3: 8, time: '08:00' },
  { id: 1, slot1: 2, slot2: 4, slot3: 8, time: '09:00' },
  { id: 2, slot1: 2, slot2: 4, slot3: 8, time: '10:00' },
  { id: 3, slot1: 2, slot2: 4, slot3: 8, time: '10:00' },
  { id: 4, slot1: 2, slot2: 4, slot3: 8, time: '08:00' },
  { id: 1, slot1: 2, slot2: 4, slot3: 8, time: '09:00' },
  { id: 2, slot1: 2, slot2: 4, slot3: 8, time: '10:00' },
  { id: 3, slot1: 2, slot2: 4, slot3: 8, time: '10:00' },
  { id: 4, slot1: 2, slot2: 4, slot3: 8, time: '08:00' },
  { id: 1, slot1: 2, slot2: 4, slot3: 8, time: '09:00' },
  { id: 2, slot1: 2, slot2: 4, slot3: 8, time: '10:00' },
  { id: 3, slot1: 2, slot2: 4, slot3: 8, time: '10:00' },
  { id: 4, slot1: 2, slot2: 4, slot3: 8, time: '08:00' },
]

function Content() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <Container>
      <Box marginTop={5} marginBottom={3} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Start Game
        </Button>
      </Box>
      <Box width={662} marginX="auto" marginBottom={4}>
        <DataGrid
          columns={columns}
          rows={rows}
          hideFooter
          disableColumnMenu
          autoHeight
        />
      </Box>
      <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen} />
    </Container>
  )
}

export default Content
