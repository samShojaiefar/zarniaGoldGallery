'use client';
import React from "react";
import { Collapse, Typography } from "antd";
import style from "./FrequentlyAskedQuestions.module.scss"; 

const { Panel } = Collapse;
const { Title, Text } = Typography;

const FAQ = () => {
  const faqs = [
    {
      question: "به هر دلیلی از طلای خریداری شده خوشم نیومد تعویض دارید؟",
      answer: "به هر دلیلی از طلای خریداری شده خوشم نیومد تعویض دارید؟",
    },
    {
      question: "برای تهران چطوری میفرستید؟شهرهای دیگه چطور؟",
      answer: "برای تهران چطوری میفرستید؟شهرهای دیگه چطور؟",
    },
    {
      question: "آدرستون برای خرید حضوری کجاست؟ساعت کاریتون ؟",
      answer: "آدرستون برای خرید حضوری کجاست؟ساعت کاریتون ؟",
    },
    {
      question: "طلاهاتون ۱۸ عیاره؟ مجوز دارید؟",
      answer: "طلاهاتون ۱۸ عیاره؟ مجوز دارید؟",
    }
  ];

  return (
    <div className={style.faqContainer}>
      <Title level={4}>سوالات پرتکرار</Title>
      <Collapse expandIconPosition={"end"} style={{backgroundColor:"transparent",border:"none"}} accordion>
        {faqs.map((faq, index) => (
          <Panel header={faq.question} key={index}>
            <Text>{faq.answer}</Text>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
