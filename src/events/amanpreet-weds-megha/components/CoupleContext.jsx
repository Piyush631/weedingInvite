import { createContext, useContext } from 'react'

const CoupleContext = createContext(null)

export function CoupleProvider({ value, children }) {
  return <CoupleContext.Provider value={value}>{children}</CoupleContext.Provider>
}

export function useCouple() {
  return useContext(CoupleContext)
}
