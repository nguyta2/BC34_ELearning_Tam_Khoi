// useEffect gọi lifecycle 1 lần
import React, { useEffect } from "react";
// gọi api
import axios from "axios";
import { Card } from "antd";
import { getLocal } from "../../utils/config";
import { callApiAllCourses } from "../../redux/reducers/CoursesReducer";
import { useDispatch, useSelector } from "react-redux";

export default function CourseList() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.CoursesReducer.allCourses);
  const userInfoLogin = getLocal("userInfoLogin");

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

  // redux thunk used to get all available courses
  const getApiAllCourses = () => {
    try {
      dispatch(callApiAllCourses);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiAllCourses();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-xl">Các khoá học mới nhất</h1>
      <div className="grid grid-cols-4 gap-4">
        {allCourses.map((item, index) => {
          // displaying 8 first courses
          if (index < 8) {
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
          }
        })}
      </div>
    </div>
  );
}
