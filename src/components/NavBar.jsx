import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/contatti'}>Contatti</Link>
            </li>
            <li>
                <Link to={'/cards'}>Card versione 1</Link>
            </li>
            <li>
                <Link to={'/cards-children'}>Card versione 2</Link>
            </li>
        </ul>
    )
}