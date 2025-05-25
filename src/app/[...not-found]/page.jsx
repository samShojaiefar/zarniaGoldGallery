'use client';

import Link from 'next/link';
import { Button, Flex, Typography } from 'antd';
import style from "./not-found.module.scss"
import NotFoundLayout from './layout';
import NotFoundIcon from '../(main)/(common)/_components/icon/404Icon';
const { Text } = Typography;

export default function NotFound() {
  return (
    <NotFoundLayout>
    <div className={style.container}>
      <NotFoundIcon />
      <Text className={style.text}>صفحه مورد نظر یافت نشد</Text>
      <Button className={style.backStore}href="/products">بازگشت به فروشگاه</Button>
    </div>
    </NotFoundLayout>
  );
}
