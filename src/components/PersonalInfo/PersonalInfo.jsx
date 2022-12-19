import React from "react";
import { Descriptions, Button } from "antd";

export default function PersonalInfo(props) {
  return (
    <Descriptions title="Thông tin cá nhân">
      <Descriptions.Item label="Email">
        {props.userInfo.email}
      </Descriptions.Item>
      <Descriptions.Item label="Họ tên">
        {props.userInfo.hoTen}
      </Descriptions.Item>
      <Descriptions.Item label="Số điện thoại">
        {props.userInfo.soDT}
      </Descriptions.Item>
      <Descriptions.Item label="Tài khoản">
        {props.userInfo.taiKhoan}
      </Descriptions.Item>
      <Descriptions.Item label="Mã loại người dùng">
        {props.userInfo.maLoaiNguoiDung}
      </Descriptions.Item>
      <Descriptions.Item>
        <Button
          onClick={() => console.log(123)}
          className="p-0 mt-10"
          type="link"
        >
          Link Button
        </Button>
      </Descriptions.Item>
    </Descriptions>
  );
}
