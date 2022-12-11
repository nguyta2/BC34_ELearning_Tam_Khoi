import React from "react";
import { Button, Form, Input } from "antd";
import logo from "../../assets/imgs/gcs_logo.jpg";
import axios from "axios";
import { history } from "../../utils/history";

export default function DangKy() {
  const onFinish = async (values) => {
    let { taiKhoan, matKhau, hoTen, soDT, maNhom, email } = values;

    try {
      const register = await axios({
        method: "POST",
        url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
        headers: {
          TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjExLzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTE3MTIwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgxMzE4ODAwfQ.6MaQyPBJpHuP9gt-zQ3wDCEUtx0JNoWxu4k5gtCaUwY`,
        },
        data: {
          taiKhoan,
          matKhau,
          hoTen,
          soDT,
          maNhom,
          email,
        },
      });
      history.push("/dangnhap");
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
        <h1 className="text-3xl">ĐĂNG KÝ</h1>
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
            label="Họ tên"
            name="hoTen"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ tên!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="soDT"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mã nhóm"
            name="maNhom"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mã nhóm!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="mr-5 px-4" type="primary" htmlType="submit">
              Đăng ký
            </Button>
            <Button onClick={() => history.push("/dangnhap")}>Đăng nhập</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
