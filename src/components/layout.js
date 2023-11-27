import { Footer, Content, Header } from "antd/es/layout/layout";
import { Menu } from "antd";

import { NavLink, Link, Outlet } from "react-router-dom";


const setActive = ({isActive}) => isActive ? 'active-link' : '';

const setActiveStyle = ({isActive}) => ({color: isActive})

function LayOut() {
    const items = [
        {
            label: <Link to="/"> хомяк </Link>,
            key: 'homepage'
        },
        {
            label: <Link to="/about"> О странице </Link>,
            key: 'about'
        },
        {
            label: <NavLink to="/login"> Login </NavLink>,
            key: 'login'
        },
        {
            label: <NavLink to="/profile"> Профиль </NavLink>,
            key: 'profile'
        }

    ];

    return (
        <div>
            <Header>
                <NavLink to="/" className={setActive}> хомяк </NavLink>
                <NavLink to="/about" className={setActive}> О странице </NavLink>
                <NavLink to="/login" className={setActive}> Login </NavLink>
                <NavLink to="/profile" className={setActive}> Профиль </NavLink>  
            </Header>
            
            {/* <Menu mode="horizontal" items={items} /> */}

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