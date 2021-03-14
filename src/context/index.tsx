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

const StateContext = React.createContext({} as IContextProps)

export const useGlobalState = () => React.useContext(StateContext).state
export const useGlobalDispatch = () => React.useContext(StateContext).dispatch

const initializer = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state')!)
  : initialState

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(stateReducer, initializer)

  React.useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}
