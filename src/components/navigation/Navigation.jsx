import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import s from './navigation.module.css';

const Navigation = () => {
    return (
        <>
            <ul className={s.nav}>
                <li>
                    <Link className='react-link' to='/'>
                        <Button variant='contained' color='primary'>Главная</Button>
                    </Link>
                </li>
                <li>
                    <Link className='react-link' to='/leads'>
                        <Button variant='contained' color='primary'>Заявки</Button>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navigation;