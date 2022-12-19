// useEffect gọi lifecycle 1 lần
import React, { useEffect, useState } from "react";
// gọi api
import axios from "axios";

import { Card, Button } from "antd";
import { getLocal } from "../../utils/config";
const { Meta } = Card;

export default function CourseList() {
  const [ListCourse, setListCourse] = useState([]);
  const userInfoLogin = getLocal("userInfoLogin");

  const handleRegistration = async (item) => {
    const { maKhoaHoc } = item;
    const { accessToken, taiKhoan } = userInfoLogin;
    console.log(taiKhoan);
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

  const getApiCourse = async () => {
    try {
      const apiCourse = await axios({
        method: "GET",
        url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
        headers: {
          TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI3LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjU1MzYwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzAxMjAwfQ.WXYIKeb4x0tXpYflgrnKFbivOnuUdLmKcgl7Xr0MD3I`,
        },
      });
      //console.log(apiCourse.data.content);
      setListCourse(apiCourse.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiCourse();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-xl">Các khoá học mới nhất</h1>
      <div className="grid grid-cols-4 gap-4">
        {ListCourse.map((item, index) => {
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
