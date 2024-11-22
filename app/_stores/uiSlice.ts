import { createAppSlice } from './createAppSlice';

export interface UiSliceState {
  showNotification: boolean;
}

const initialState: UiSliceState = {
  showNotification: false,
};

export const uiSlice = createAppSlice({
  name: 'ui',
  initialState,
  reducers: (create) => ({
    setToggleNotification: create.reducer((state) => {
      state.showNotification = !state.showNotification;
    }),
  }),
});

export const { setToggleNotification } = uiSlice.actions;
