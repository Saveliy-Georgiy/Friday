export type PasswordActionsType = {}

const initialState = {}

export type AuthType = typeof initialState

export const passwordReducer = (state = initialState, action: PasswordActionsType): AuthType => {
    return state
}