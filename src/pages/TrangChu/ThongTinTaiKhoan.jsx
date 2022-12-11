import React from "react";
import { Breadcrumb, Layout, Button, Descriptions } from "antd";
const { Content } = Layout;

export default function ThongTinTaiKhoan() {
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
            <Button>THÔNG TIN CÁ NHÂN</Button>
            <Button className="ml-2">KHOÁ HỌC CỦA TÔI</Button>
          </Breadcrumb>
          <div
            style={{
              minHeight: "280px",
              padding: "24px",
              background: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            Content
          </div>
        </Content>
      </Layout>
    </div>
  );
}
