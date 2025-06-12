import { useState } from "react";
import {
    Divider,
    Flex,
    Form,
    Input,
    Modal,
    Typography,
    Button,
    message, Row, Col,
} from "antd";
import CloseIcon from "@/app/(main)/(common)/_components/icon/CloseIcon";
import style from "./categories.module.scss";
import LeftArrowIcon from "../../(common)/_components/icon/leftArrowIcon";
import {useGetCategories} from "@/app/(main)/(products)/(products)/_hooks/api/categoryApi";
import {useRouter} from "next/navigation";

const { Text } = Typography;
function Categories({ onClose }) {

    const router = useRouter();
    const {isLoading, data}  = useGetCategories();
    return (
        <Modal
            className={style.container}
            open={true}
            footer={null}
            closable={false}
            width={380}
            centered
        >
            <Flex justify="space-between" align="center">
                <Text className={style.title}>دسته بندی ها</Text>
                <CloseIcon onClick={onClose} width={24} height={24} />
            </Flex>
            <Divider/>
            <Row gutter={16}>
                {!isLoading && data?.data?.length > 0 && data.data.map((category)=>(
                    <Col key={category.id} style={{paddingTop:"16px"}} className="gutter-row customCol" span={12}>
                        <Button onClick={()=>{
                            router.push('/products')
                            onClose();
                        }} className={style.button} style={{width:"100%",borderRadius:"12px",border:"1px solid rgba(113, 90, 65, 0.40)",}}>{category.title}</Button>
                    </Col>
                ))}
            </Row>

            <Divider />

        </Modal>
    );
}

export default Categories;
