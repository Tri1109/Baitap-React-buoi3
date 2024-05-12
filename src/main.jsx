import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaiTapTicket from "./BaiTapTicket/BaiTapTicket.jsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="" element={<BaiTapTicket />}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
