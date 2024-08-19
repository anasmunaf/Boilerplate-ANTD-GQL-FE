import React from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import banner from "../../assets/images/public-banner.jpg";
type Props = {};

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
