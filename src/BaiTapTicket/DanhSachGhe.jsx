import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themGheDangDatAction } from "../redux/ticketReducer";
const DanhSachGhe = (props) => {
  const dispatch = useDispatch();
  const { danhSachGheDangDat } = useSelector((state) => state.ticketReducer);
  const { hangGhe, soHangGhe } = props;
  const renderGhe = () => {
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      let cssGheDangDat = "";
      let indexGheDangDat = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            const action = themGheDangDatAction(ghe);
            dispatch(action);
          }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  const renderSoHang = () => {
    return hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button className="rowNumber" key={index}>
          {hang.soGhe}
        </button>
      );
    });
  };
  const renderHangGhe = () => {
    if (soHangGhe === 0) {
      return (
        <div className="ms-2">
          {hangGhe.hang} {renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {hangGhe.hang} {renderGhe()}
        </div>
      );
    }
  };
  return (
    <div className="text-light text-start ms-5 mt-2">{renderHangGhe()}</div>
  );
};

export default DanhSachGhe;
