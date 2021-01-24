import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <>
        <ul className='crm-navbar'>
            <li><Link className = 'react-link' to='/'>Главная</Link></li>
            <li><Link className = 'react-link' to='/leads'>Заявки</Link></li>
        </ul>
        </>
    )
}

export default Navigation;