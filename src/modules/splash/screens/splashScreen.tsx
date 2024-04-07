import { Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../../product/routes";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";

const SplashScreen = () => {
    const { user } = useGlobalContext();
    const Navigate = useNavigate();
    
    useEffect(() => {
        if (user){
            Navigate(ProductRoutesEnum.PRODUCTS);
        } 
    },[user]);
    return (
        <Spin size="large"/>
    )
};

export default SplashScreen