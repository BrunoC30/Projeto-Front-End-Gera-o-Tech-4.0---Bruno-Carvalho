import { Outlet } from "react-router-dom";
import { HeaderMobile } from "./Header";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { useState } from "react";

const Layout = () => {
    const [isOpen,setIsOpen] = useState(false);

    function changeState(){
        setIsOpen(!isOpen)
    }

    return ( 
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
        <HeaderMobile executarFunc={changeState}></HeaderMobile>
        <Header/>
       <div style={{ display: 'flex', flex: 1, position: 'relative', overflow: 'hidden' }}>
                <SideBar isOpen={isOpen}/>
                
                <main style={{ flex: 1, overflowY: 'auto' }}>
                    <Outlet />
                </main>
            </div>
        <Footer/>
    </div> 
    );
}
 
export default Layout;