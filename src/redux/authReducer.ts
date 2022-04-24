export type AuthActionsType = {}

const initialState = {}

export type AuthType = typeof initialState

export const authReducer = (state = initialState, action: AuthActionsType): AuthType => {
    return state
}