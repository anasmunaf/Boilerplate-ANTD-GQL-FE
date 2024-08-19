import React from "react";
import { Button, Card, Col, Flex, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { publicRoutes } from "../../../constants/routes";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./gql";
import { useAuth } from "../../../hooks";
import { getDynamicUrl } from "../../../utils/helpers";
import logo from "../../../assets/images/logo.png";

type Props = {};

type FieldType = {
  username?: string;
  password?: string;
};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loginMutate, { loading }] = useMutation(LOGIN);

  async function onFinish(values: FieldType) {
    const data = await loginMutate({
      variables: { ...values },
    });

    login({ ...data?.data?.login, userData: values });
  }

  return (
    <Flex vertical justify="center" className="h-full">
      <Row justify="center" gutter={[0, 10]}>
        <Col span={24}>
          <Flex justify="center">
            <img src={logo} width="200" height="100" />
          </Flex>
        </Col>

        <Col span={18}>
          <Card>
            <Form
              name="basic"
              initialValues={{
                username: "john@mail.com",
                password: "changeme",
              }}
              autoComplete="off"
              requiredMark={false}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item noStyle>
                <Button
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  className="w-full"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col span={18}>
          <Button
            type="link"
            onClick={() =>
              navigate(getDynamicUrl(".", publicRoutes.forgotPassword))
            }
          >
            Forgot Password
          </Button>
        </Col>
      </Row>
    </Flex>
  );
};

export default Login;
