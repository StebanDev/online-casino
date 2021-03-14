import * as React from 'react'
import { stateReducer, Action } from './reducer'

export type State = {
  username: string
  balance: number
  history: any[]
}

const initialState = {
  username: '',
  balance: 0,
  history: [],
}

interface IContextProps {
  state: State
  dispatch: (action: Action) => void
}

const GlobalStateContext = React.createContext({} as IContextProps)

export const useGlobalState = () => React.useContext(GlobalStateContext).state
export const useGlobalDispatch = () =>
  React.useContext(GlobalStateContext).dispatch

const initializer = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state')!)
  : initialState

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(stateReducer, initializer)

  React.useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
