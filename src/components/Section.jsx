import { Link } from "react-router-dom";
const Section = ({ title, textalign = 'left', link='', children }) => {
    return (
        <div style={{padding:'30px 20px'}}>
            <div style={{margin:'30px', display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <h2 style={{ textAlign: textalign, color:'var(--dark-gray-2)'}}>{title}</h2>
                <Link to={link.href}
                    style={{ color: 'var(--primary)' }}
                >{link.title}</Link>
            </div>
                {children}

        </div>
    );
}

export default Section;