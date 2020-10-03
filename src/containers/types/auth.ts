export type AuthState = {
  token: string | null, standBy: boolean
}

export type AuthCtxType = {
  state: AuthState
  seedDataStandByHandler: () => void
};
