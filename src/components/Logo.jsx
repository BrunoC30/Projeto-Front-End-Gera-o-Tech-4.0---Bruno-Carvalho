const Logo = ({tipo}) => {
    let path = (tipo=='header') ? "src/assets/logo.svg" :"src/assets/logo-footer.svg";

    return ( <>
    
    <img src={path} alt="logo"
        style={{flex:1,maxWidth:'200px'}}
    />
    
    </> );
}
 
export default Logo;