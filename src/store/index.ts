import { configureStore } from '@reduxjs/toolkit'
import tarefasReducers from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducers,
    filtro: filtroReducer
  }
})

export type RootRecucer = ReturnType<typeof store.getState>
export default store
