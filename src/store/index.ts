import { configureStore } from '@reduxjs/toolkit'
import tarefasReducers from './reducers/tarefas'

export const store = configureStore({
  reducer: {
    tarefas: tarefasReducers
  }
})

export type RootRecucer = ReturnType<typeof store.getState>
