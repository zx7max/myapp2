import { Footer, Content } from "antd/es/layout/layout";
import { Menu } from "antd";

import { Link, Outlet } from "react-router-dom";


function LayOut() {
    const items = [
        {
            label: <Link to="/"> хомяк </Link>,
            key: 'homepage'
        },
        {
            label: <Link to="/about"> О странице </Link>,
            key: 'about'
        }    
    ];

    return (
        <div>
            <Menu mode="horizontal" items={items} />
            
            <Content>
                <Outlet/>
            </Content>

            <Footer>
                2023
            </Footer>
        </div>
    );

}

export {LayOut};