import React from "react";
import { Card, Button } from "antd";
const { Meta } = Card;

export default function CourseItem(props) {
  return (
    <Card
      hoverable
      style={{
        width: 260,
      }}
      cover={
        <img className="img-fluid h-48" alt="#" src={props.item.hinhAnh} />
      }
    >
      {/* <Meta
        className="text-sm whitespace-normal"
        title={props.item.tenKhoaHoc}
        description=""
      /> */}
      <div>
        <h1 className="text-base truncate">{props.item.tenKhoaHoc}</h1>
        <div className="d-flex justify-end">
          <button className="bg-yellow-300 rounded-sm p-2 px-4 hover:text-white">
            Đăng ký
          </button>
        </div>
      </div>
    </Card>
  );
}
