import { Link } from "react-router-dom";
const Section = ({ title, textalign = 'left', link='', children }) => {
    return (
        <div style={{padding:'30px 20px'}}>
            <div style={{margin:'30px'}}>
                <h2 style={{ textAlign: textalign, color:'var(--dark-gray-2)'}}>{title}</h2>
                <Link to={link.href}
                    style={{ color: 'var(--primary)' }}
                >{link.tittle}</Link>
            </div>
                {children}

        </div>
    );
}

export default Section;