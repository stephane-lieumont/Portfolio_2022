import { Slice, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LayoutState } from '~/interfaces/forms.intf';

const initialState: LayoutState = {
  headerHeigth: 0
}

const layoutSlice:Slice = createSlice({
  name: 'layout',
  initialState: {...initialState},
  reducers: {
    setHeaderHeigth: (state: LayoutState, action: PayloadAction<number>) => {
      state.headerHeigth = action.payload
    },
  },
});

const { setHeaderHeigth } = layoutSlice.actions

export const layoutActions = { setHeaderHeigth }

export default layoutSlice