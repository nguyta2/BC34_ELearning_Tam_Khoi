import React, { useState } from "react";
import { Input, Pagination } from "antd";
import { getLocal } from "../../utils/config";
import axios from "axios";

export default function MyCourses(props) {
  const [courses, setCourses] = useState(props);
  const userInfoLogin = getLocal("userInfoLogin");
  const { accessToken, taiKhoan } = userInfoLogin;

  const cancelCourseRegistration = async (course) => {
    const { maKhoaHoc } = course;
    try {
      const callApiCourseCancellation = await axios({
        method: "POST",
        url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjExLzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTE3MTIwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgxMzE4ODAwfQ.6MaQyPBJpHuP9gt-zQ3wDCEUtx0JNoWxu4k5gtCaUwY`,
        },
        data: {
          maKhoaHoc,
          taiKhoan,
        },
      });
      alert(callApiCourseCancellation.data);
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="whitespace-nowrap text-3xl flex-initial w-1/2">
          Các khoá học đã tham gia
        </h1>
        <div className="w-1/2 flex justify-end">
          <Input
            style={{ width: "22rem" }}
            placeholder="Nhập khoá học cần tìm ..."
          />
        </div>
      </div>
      <table className="w-full mt-4">
        <tbody>
          {courses &&
            courses.map((course, index) => {
              return (
                <tr key={index} className="border-t-2 border-slate-400">
                  <td className="w-64">
                    <img
                      style={{ height: "180px", width: "100%" }}
                      src={course.hinhAnh}
                      alt="#"
                    />
                  </td>
                  <td className="bg-slate-200 p-3 align-top">
                    <h1 className="text-2xl whitespace-nowrap">
                      {course.tenKhoaHoc}
                    </h1>
                    <p>{course.moTa}</p>
                    <div className="flex justify-end">
                      <button
                        onClick={() => cancelCourseRegistration(course)}
                        type="button"
                        className="text-sm mr-20 border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                      >
                        Huỷ
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <Pagination pageSize={3} defaultCurrent={1} total={20} />
      </div>
    </div>
  );
}
