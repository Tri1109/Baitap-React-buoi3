import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  danhSachGheDangDat: [],
};
const ticketReducer = createSlice({
  name: "ticketReducer",
  initialState,
  reducers: {
    themGheDangDatAction: (state, action) => {
      let index = state.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1);
      } else {
        state.danhSachGheDangDat.push(action.payload);
      }
    },
    xoaGheDangDatAtion: (state, action) => {
      let index = state.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1);
      }
    },
    resetGheAction: (state, action) => {
      state.danhSachGheDangDat = action.payload;
    },
  },
});

export const { themGheDangDatAction, xoaGheDangDatAtion, resetGheAction } =
  ticketReducer.actions;

export default ticketReducer.reducer;
