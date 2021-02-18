import { Card, Button } from '@material-ui/core';
import className from 'classnames';
import {  useHistory } from 'react-router-dom';
import s from './col.module.css';

function Col({name, leads, onClick}) {
    const leadsColumn = leads.filter(item => item.status === name),
        history = useHistory();

    function handleClick(id) {
        history.push(`/leads/${id}`);
    }

    if (leadsColumn.length === 0) {
        return (
            <>
                <div>Заявок нет</div>
                <div className={className(s.card, s.unvisible)}></div>
            </>
        )
    }



    return (
        <>
            {leadsColumn.map(({ id, title, phone, date }) =>
            <div key={id}>
                <Card className={s.card}>
                    <div onClick={() => handleClick(id)}>
                        <div className={s.cardName}>{title}</div>
                        <div className={s.cardPhone}>{phone}</div>
                        <div className={s.cardDate}>{date}</div>
                    </div>
                    <Button className={s.btn} onClick={(event) => onClick(event, id)} variant='contained' type='button'>
                        Удалить
                    </Button>
                </Card>
            </div>
            )}
        </>
    )
}

export default Col;