import React, { useState } from "react";
import { Button, Flex, Layout, Menu, Space, theme } from "antd";
import { ReactComponent as Home } from "/src/assets/icons/home.svg";
import { ReactComponent as MenuIcon } from "/src/assets/icons/menu.svg";
import { ReactComponent as MenuUpIcon } from "/src/assets/icons/menu-open.svg";
import { ReactComponent as Library } from "/src/assets/icons/library.svg";
import { ReactComponent as Logout } from "/src/assets/icons/logout.svg";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

const { Header, Sider, Content } = Layout;

const items = [
  {
    key: "1",
    icon: <Home />,
    label: "Home",
  },
  {
    key: "2",
    icon: <Library />,
    label: "Library",
  },
];

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useAuth();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const isCollapsed = collapsed ? (
    <MenuIcon className={"fill-primary"} />
  ) : (
    <MenuUpIcon className={"fill-primary"} />
  );

  return (
    <Layout className="h-full light" hasSider>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Flex vertical justify="space-between" className="h-full p-2">
          <Space direction="vertical" size={24} className="w-full">
            <Flex justify="center" className="py-2">
              <img src="images/logo.png" width="70" />
            </Flex>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={items}
            />
          </Space>
          <Button
            block
            className="border-none"
            onClick={logout}
            icon={<Logout className="fill-gray-500" />}
          >
            {!collapsed && "Logout"}
          </Button>
        </Flex>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={isCollapsed}
            onClick={() => setCollapsed(!collapsed)}
            className="text-base my-4 mx-4"
          />
        </Header>
        <Content className="py-6 px-4 overflow-auto">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
