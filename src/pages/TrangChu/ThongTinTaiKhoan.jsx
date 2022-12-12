import React, { useState } from "react";
import { Breadcrumb, Layout, Button, Descriptions } from "antd";
import { getLocal } from "../../utils/config";
const { Content } = Layout;

export default function ThongTinTaiKhoan() {
  let [userInfo, setUserInfo] = useState(true);
  const userInfoLogin = getLocal("userInfoLogin");
  return (
    <div className="mt-4 border">
      <Layout className="layout">
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Button onClick={() => setUserInfo(true)}>THÔNG TIN CÁ NHÂN</Button>
            <Button onClick={() => setUserInfo(false)} className="ml-2">
              KHOÁ HỌC CỦA TÔI
            </Button>
          </Breadcrumb>
          <div
            style={{
              minHeight: "280px",
              padding: "24px",
              background: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            {userInfo && userInfoLogin ? (
              <Descriptions title="Thông tin cá nhân">
                <Descriptions.Item label="Email">
                  {userInfoLogin.email}
                </Descriptions.Item>
                <Descriptions.Item label="Họ tên">
                  {userInfoLogin.hoTen}
                </Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">
                  {userInfoLogin.soDT}
                </Descriptions.Item>
                <Descriptions.Item label="Tài khoản">
                  {userInfoLogin.taiKhoan}
                </Descriptions.Item>
                <Descriptions.Item label="Mã loại người dùng">
                  {userInfoLogin.maLoaiNguoiDung}
                </Descriptions.Item>
              </Descriptions>
            ) : (
              ""
            )}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
