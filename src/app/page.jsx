"use client";

import { Spin } from "antd";
import dynamic from "next/dynamic";

const Home =dynamic(()=>import("./_home/_components/home"),{
  loading:()=><Spin/>
})

function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
export default HomePage;
