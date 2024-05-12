import React, { Fragment } from "react";
import "./BaiTapTicket.css";
import ThongTinGhe from "./ThongTinGhe";
import danhSachGhe from "../data/danhSachGhe.json";
import DanhSachGhe from "./DanhSachGhe";
const BaiTapTicket = () => {
  const renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <DanhSachGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: "url(./img/bgmovie.jpg)",
        backgroundSize: "100%",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <h1 className="text-warning">Đặt vé xem phim</h1>
              <h4 className="text-light fst-italic mt-3">Màn hình</h4>
              <div className="d-flex flex-column justify-content-center mt-2">
                <div className="screen"></div>
                {renderHangGhe()}
              </div>
            </div>
            <div className="col-4">
              <h1 className="text-warning">Thông tin ghế ngồi</h1>
              <ThongTinGhe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapTicket;
