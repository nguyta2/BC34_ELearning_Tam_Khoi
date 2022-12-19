import React, { useState, useEffect } from "react";
import { Layout, Button, Anchor } from "antd";
import { getLocal } from "../../utils/config";
import axios from "axios";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import MyCourses from "../../components/MyCourses/MyCourses";
const { Link } = Anchor;
const { Content } = Layout;

export default function ThongTinTaiKhoan() {
  let [userInfoVisibility, setUserInfoVisibility] = useState(true);
  let [userInfo, setUserInfo] = useState({});
  const userAccessToken = getLocal("userInfoLogin").accessToken;

  const getApiUserInfo = async () => {
    try {
      const userInfo = await axios({
        method: "POST",
        url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI3LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjU1MzYwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzAxMjAwfQ.WXYIKeb4x0tXpYflgrnKFbivOnuUdLmKcgl7Xr0MD3I`,
        },
      });
      setUserInfo(userInfo.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiUserInfo();
  }, []);

  return (
    <div className="mt-4 border">
      <Layout className="layout">
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Button onClick={() => setUserInfoVisibility(true)}>
            THÔNG TIN CÁ NHÂN
          </Button>
          <Button onClick={() => setUserInfoVisibility(false)} className="ml-2">
            KHOÁ HỌC CỦA TÔI
          </Button>

          <div
            style={{
              minHeight: "280px",
              padding: "24px",
              background: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            {userInfoVisibility ? (
              <PersonalInfo userInfo={userInfo} />
            ) : (
              <MyCourses registeredCourses={userInfo.chiTietKhoaHocGhiDanh} />
            )}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
