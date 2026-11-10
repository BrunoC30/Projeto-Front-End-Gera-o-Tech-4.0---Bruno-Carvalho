import { Outlet } from "react-router-dom";
import { HeaderMobile } from "./Header";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return ( 
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
        <HeaderMobile></HeaderMobile>
        <Header/>
        <main style={{flex:1}}>
            <Outlet/>
        </main>
        <Footer/>
    </div> 
    );
}
 
export default Layout;