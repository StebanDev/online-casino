import { State } from '.'
import generateUID from '../utils/generate-uid'

export enum ActionTypes {
  LOGIN_USER,
  LOGOUT_USER,
  MAKE_SPIN,
}

export type Action =
  | { type: ActionTypes.LOGIN_USER; username: string }
  | { type: ActionTypes.LOGOUT_USER }
  | { type: ActionTypes.MAKE_SPIN; numbers: number[] }

export const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        username: action.username,
      }
    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        username: '',
        history: [],
      }
    case ActionTypes.MAKE_SPIN:
      return {
        ...state,
        history: [
          ...state.history,
          {
            id: generateUID(),
            slot1: action.numbers[0],
            slot2: action.numbers[1],
            slot3: action.numbers[2],
            time: new Date().toLocaleString(),
          },
        ],
      }
    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`)
  }
}
