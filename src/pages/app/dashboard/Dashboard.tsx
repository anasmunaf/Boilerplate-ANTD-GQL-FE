import { useQuery } from "@apollo/client";
import { Flex, theme } from "antd";
import React from "react";
import { PRODUCT } from "./gql";

type Props = {};

const Dashboard = (props: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { data } = useQuery(PRODUCT, { returnPartialData: true });

  return (
    <Flex
      vertical
      gap={2}
      style={{
        padding: 24,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {Array(100)
        .fill("-")
        .map((item, index) => (
          <div key={index} className="basis-full">
            {item}
          </div>
        ))}
    </Flex>
  );
};

export default Dashboard;
