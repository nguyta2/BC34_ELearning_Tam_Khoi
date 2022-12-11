import React from "react";
import { Button, Form, Input } from "antd";
import logo from "../../assets/imgs/gcs_logo.jpg";
import { history } from "../../utils/history";
import axios from "axios";
import { saveLocal } from "../../utils/config";

export default function DangNhap() {
  const onFinish = async (values) => {
    const { taiKhoan, matKhau } = values;
    try {
      const signIn = await axios({
        method: "POST",
        url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
        headers: {
          TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjExLzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTE3MTIwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgxMzE4ODAwfQ.6MaQyPBJpHuP9gt-zQ3wDCEUtx0JNoWxu4k5gtCaUwY`,
        },
        data: {
          taiKhoan,
          matKhau,
        },
      });
      saveLocal("userInfoLogin", signIn.data);
      history.push("/thongtintaikhoan");
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div className="mt-5 grid grid-cols-2 gap-2">
      <div>
        <img className="img-fluid" src={logo} alt="#" />
      </div>
      <div>
        <h1 className="text-3xl">ĐĂNG NHẬP</h1>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Tài khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tài khoản!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="mr-5 px-4" type="primary" htmlType="submit">
              Đăng nhập
            </Button>
            <Button onClick={() => history.push("/dangky")}>Đăng ký</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
