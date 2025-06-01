"use client";

import { Spin } from "antd";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./(home)/_components/home"), {
  loading: () => <Spin />,
});

function HomePage() {
  return <Home />;
}
export default HomePage;
