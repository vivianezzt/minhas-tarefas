import { configureStore } from '@reduxjs/toolkit'
import tarefasReducers from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducers
  }
})

export type RootRecucer = ReturnType<typeof store.getState>
export default store
