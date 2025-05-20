'use client';

import Link from 'next/link';
import  NotFoundIcon  from './(common)/_components/icon/404Icon'; 
import { Button, Flex, Typography } from 'antd';
import style from "./404.module.scss"
const { Text } = Typography;

export default function NotFound() {
  return (
    <Flex className={style.container} vertical gap={16} justify="center" align="center" style={{ height: '100vh' }}>
      <NotFoundIcon />
      <Text className={style.text}>صفحه مورد نظر یافت نشد</Text>
      <Button className={style.backStore}href="/">بازگشت به فروشگاه</Button>
    </Flex>
  );
}
