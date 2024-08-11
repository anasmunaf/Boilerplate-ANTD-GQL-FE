import React from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

type Props = {};
const banner = "/images/public-banner.jpg";

function PublicLayout({}: Props) {
  return (
    <Row>
      <Col span={12}>
        <Outlet />
      </Col>
      <Col span={12}>
        <img src={banner} width="100%" className="h-screen object-cover" />
      </Col>
    </Row>
  );
}

export default PublicLayout;
