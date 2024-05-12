import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { xoaGheDangDatAtion } from "../redux/ticketReducer";
import { resetGheAction } from "../redux/ticketReducer";
const ThongTinGhe = () => {
  const dispatch = useDispatch();
  const { danhSachGheDangDat } = useSelector((state) => state.ticketReducer);
  console.log(danhSachGheDangDat);
  return (
    <div>
      <div className="mt-5 text-light">
        <button className="gheDuocChon"></button>
        <span>Ghế đã đặt</span>
        <br />
        <button className="gheDangChon"></button>
        <span>Ghế đang đặt</span>
        <br />
        <button className="ghe ms-0"></button>
        <span>Ghế còn trống</span>
        <br />
      </div>
      <div className="mt-5 table-responsive table-wrapper">
        <table className="table table-bordered table_custom ">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-dark">
            {danhSachGheDangDat.map((gheDangDat, index) => {
              console.log(gheDangDat);
              return (
                <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia.toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        const action = xoaGheDangDatAtion(gheDangDat);
                        dispatch(action);
                      }}
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng tiền</td>
              <td>
                {danhSachGheDangDat
                  .reduce((tongTien, gheDangDat) => {
                    return (tongTien += gheDangDat.gia);
                  }, 0)
                  .toLocaleString()}
              </td>
              <td>
                <button
                  onClick={() => {
                    const emptyArr = [];
                    const action = resetGheAction(emptyArr);
                    dispatch(action);
                    alert("Bạn đã đặt vé thành công!");
                  }}
                >
                  Đặt vé
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ThongTinGhe;
