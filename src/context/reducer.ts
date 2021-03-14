import { State } from '.'

export enum ActionTypes {
  LOGIN_USER,
  LOGOUT_USER,
}

export type Action =
  | { type: ActionTypes.LOGIN_USER; username: string }
  | { type: ActionTypes.LOGOUT_USER }

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
      }
    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`)
  }
}
