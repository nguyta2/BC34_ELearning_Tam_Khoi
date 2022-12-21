import React, { useEffect } from "react";
import useRoute from "../../hooks/useRoute";
import axios from "axios";
import { getLocal } from "../../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { callApiCourseListBasedOnCourseType } from "../../redux/reducers/CoursesReducer";
import { Card } from "antd";

export default function DanhMucKhoaHoc() {
  const userInfoLogin = getLocal("userInfoLogin");
  const dispatch = useDispatch();
  const courses = useSelector(
    (state) => state.CoursesReducer.coursesBasedOnCourseType
  );

  const handleRegistration = async (item) => {
    const { maKhoaHoc } = item;
    const { accessToken, taiKhoan } = userInfoLogin;

    try {
      const apiRegistration = await axios({
        method: "POST",
        url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjExLzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTE3MTIwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgxMzE4ODAwfQ.6MaQyPBJpHuP9gt-zQ3wDCEUtx0JNoWxu4k5gtCaUwY`,
        },
        data: {
          maKhoaHoc,
          taiKhoan,
        },
      });
      alert(apiRegistration.data);
    } catch (err) {
      alert(err.response.data);
    }
  };

  const {
    params,
    navigate,
    searchParams: [searchParams, setSearchParams],
  } = useRoute();
  const keyWord = searchParams.has("word") ? searchParams.get("word") : "";

  const getApiCourseListBasedOnCourseType = async () => {
    try {
      dispatch(callApiCourseListBasedOnCourseType(keyWord));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiCourseListBasedOnCourseType();
  }, [keyWord]);

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 mt-4">
        <div className="container">
          <h1 className="py-4 text-white text-2xl">{keyWord}</h1>
        </div>
      </div>

      <div className="container">
        <h1 className="text-xl">Các khoá học phổ biến</h1>
        <div className="grid grid-cols-4 gap-4">
          {courses.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  hoverable
                  style={{
                    width: 260,
                  }}
                  cover={
                    <img
                      className="img-fluid h-48"
                      alt="#"
                      src={item.hinhAnh}
                    />
                  }
                >
                  <div>
                    <h1 className="text-base truncate">{item.tenKhoaHoc}</h1>
                    <div className="d-flex justify-end">
                      <button
                        onClick={() => handleRegistration(item)}
                        className="bg-yellow-300 rounded-sm p-2 px-4 hover:text-white"
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
