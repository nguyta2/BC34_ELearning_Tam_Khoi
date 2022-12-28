import "./App.css";
import "antd/dist/antd.css";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { history } from "./utils/history";
import LayoutAdmin from "./templates/admins/LayoutAdmin";
import Layout from "./templates/users/Layout";
import TrangChu from "./pages/TrangChu/TrangChu";
import TimKiemKhoaHoc from "./pages/TimKiem/TimKiemKhoaHoc";
import NotFound from "./pages/NotFound";
import CourseDetail from "./components/CourseItem/CourseDetail";
import DanhMucKhoaHoc from "./pages/TrangChu/DanhMucKhoaHoc";
import DangKy from "./pages/TrangChu/DangKy";
import DangNhap from "./pages/TrangChu/DangNhap";
import ThongTinTaiKhoan from "./pages/TrangChu/ThongTinTaiKhoan";

function App() {
  return (
    <div>
      <HistoryRouter history={history}>
        <Routes>
          <Route exact path="/dangky" element={<DangKy />}></Route>
          <Route exact path="/dangnhap" element={<DangNhap />}></Route>
          {/* user */}
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<TrangChu />} />
            <Route index path="/TimKiemKhoaHoc" element={<TimKiemKhoaHoc />} />
            <Route index path="/chitietkhoahoc" element={<CourseDetail />} />
            <Route index path="/DanhMucKhoaHoc" element={<DanhMucKhoaHoc />} />
            <Route
              index
              path="/thongtintaikhoan"
              element={<ThongTinTaiKhoan />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* admin */}
          <Route path="/admin" element={<LayoutAdmin />}></Route>
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
