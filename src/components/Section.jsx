import { Link } from "react-router-dom";
const Section = ({ title, textalign = 'left', link, children }) => {
    return (
        <div>
            <div>
                <h2 style={{ textAlign: textalign }}>{title}</h2>
                <Link to={link.href}
                    style={{ color: 'var(--primary)' }}
                >{link.tittle}</Link>
            </div>
                {children}

        </div>
    );
}

export default Section;