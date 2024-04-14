import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    closeModal:false,
    saveNext: false,
}

const ButtonsSlice = createSlice({
    name: "buttonsSlice",
    initialState,
    reducers:{
      setCloseModal: (state, action)=>{
        state.closeModal = action.payload
      },
      setSaveNext: (state, action)=>{
        state.saveNext = action.payload
      }
    }
})

export const {setCloseModal, setSaveNext} = ButtonsSlice.actions;
export default ButtonsSlice.reducer;
