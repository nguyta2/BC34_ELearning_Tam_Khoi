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
import TimKiem from "./pages/TimKiem/TimKiem";
import NotFound from "./pages/NotFound";
import CourseList from "./components/CourseItem/CourseList";
import CourseDetail from "./components/CourseItem/CourseDetail";

function App() {
  return (
    <div>
      <HistoryRouter history={history}>
        <Routes>
          {/* user */}
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<TrangChu />} />
            <Route path="/timkiem" element={<TimKiem />} />
<Route path="/chitietkhoahoc" element={<CourseDetail/>}/>
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
