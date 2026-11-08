
export const Stars = ({numero})=>{

    const svg = <svg width="26" height="36" viewBox="0 0 16 16" fill="var(--warning)" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z" stroke="var(--warning)"/>
                </svg>;

    const svgWhite = <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--white)" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z" stroke="var(--white)"/>
                     </svg>;

    const itens = [];

    for(let i = 0;i<numero;i++){
        itens.push(svg)
    }


    return(<>

        <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                <p>{itens}</p>
                <p style={{backgroundColor:'var(--warning)',color:'var(--white)',
                    width:'40px',height:'26px',fontSize:'1.3rem',borderRadius:'4px',
                    paddingLeft:'5px',display:'flex',alignItems:'center',gap:'3px'
                }}

                >{numero} {svgWhite}</p> 
                <p style={{color:'var(--dark-gray-2)'}}>(90 Avaliações)</p>
        </div>

    </>)
}

const Logo = ({tipo}) => {

    let imgA = 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg';
    let imgB = 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-footer.svg';

    let path = (tipo=='header') ? imgA : imgB;

    return ( <>
    
    <img src={path} alt="logo"
        style={{flex:1,maxWidth:'200px'}}
    />
    
    </> );
}
 
export default Logo;