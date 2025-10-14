'use client';

import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Input, Row, Spin } from 'antd';
import loginImg from "../../../../public/Home/login.png";// Ensure this path is correct relative to the component
import { Typography, message } from 'antd';
import { useRouter } from 'next/navigation'; // Replace useNavigate with useRouter

import Image from 'next/image'; // Import Image from next/image
import { useResetPasswordMutation } from '@/redux/Api/userApi';
import toast from 'react-hot-toast';

const { Title, Text } = Typography;

function NewPassword() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false);
  const [newPasswordMutation] = useResetPasswordMutation(); // Renamed to avoid typo
  const router = useRouter(); // Use Next.js useRouter hook
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onFinish = async () => {
    const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    const email = isBrowser ? localStorage.getItem('email') : null;

    if (!email) {
      toast.error('Email not found in local storage');
      return;
    }

    if (!newPassword || !confirmPassword) {
      toast.error('Please fill in both password fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const data = {
      email,
      newPassword,
      confirmPassword,
    };
    setLoading(true);
    try {
      const res = await newPasswordMutation(data).unwrap();

      if (res?.success) {
        toast.success(res?.message);
        setLoading(false);
        if (isBrowser) {
          localStorage.removeItem('email');
        }

        setTimeout(() => {
        router.push('/auth/login'); 
        }, 300);// Use router.push for navigation
      } else {
        toast.error(res?.message || 'Failed to update password');
        setLoading(false);
      }
    } catch (error) {
      toast.error(error?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center md:p-20 p-4">
      <div className="absolute w-full h-full flex">
        <div className="bg-[#1d4ed8] w-[30%] h-full"></div>
        <div className="bg-[#fff] w-[70%] h-full"></div>
      </div>
      <Row
        gutter={[16, 16]}
        className="w-full max-w-screen-2xl shadow-2xl mt-16 md:mt-0 mx-auto min-h-[600px]"
      >
        <Col className="hidden md:block relative" xs={0} md={12}>
          <div className="relative h-full">
            <Image
              src={loginImg}
              alt="New Password Background"
              layout="fill" // Use fill to match bg-cover behavior
              objectFit="cover" // Equivalent to bg-cover
              objectPosition="center" // Equivalent to bg-center
              className="rounded-l-sm"
              priority={true} // Prioritize loading for above-the-fold image
            />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <Card
            style={{
              height: '100%',
              border: 'none',
            }}
            bodyStyle={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '100%', margin: '0 auto' }}>
              <Title
                level={1}
                style={{ marginBottom: '8px', color: '#1f2937' }}
              >
                Set a new password
              </Title>
              <Text style={{ marginBottom: '8px', color: '#1f2937' }}>
                Create a new password. Ensure it differs from previous ones for
                security
              </Text>

              <Form
                requiredMark={false}
                name="login"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="New Password"
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your new password!',
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Item>

                <Form.Item>
                  <button
                    className={`w-full py-3 rounded text-white flex justify-center items-center gap-2 transition-all duration-300 ${
                      loading
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-[#3b82f6] hover:bg-blue-500'
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spin size="small" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      'Update Password'
                    )}
                  </button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default NewPassword;