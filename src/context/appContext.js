import React from 'react'
import initialState from '../initialState'

const AppContext = React.createContext({})

const AppProvider = (props) => {
  return (
    <AppContext.Provider value={{
      initialState
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
