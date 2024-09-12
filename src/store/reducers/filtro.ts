import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefas'

type FiltroState = {
  termo: string
  criterio: 'peioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const FiltroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, acrtion: PayloadAction<string>) => {
      state.termo = acrtion.payload
    }
  }
})

export const { alteraTermo } = FiltroSlice.actions
export default FiltroSlice.reducer
