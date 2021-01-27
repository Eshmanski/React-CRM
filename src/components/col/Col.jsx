import { Card } from '@material-ui/core';
import className from 'classnames';
import {  useHistory } from 'react-router-dom';
import s from './col.module.css';

function Col({name, leads}) {
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
                <Card className={s.card} onClick={() => handleClick(id)} key={id}>
                    <div className={s.cardName}>{title}</div>
                    <div className={s.cardPhone}>{phone}</div>
                    <div className={s.cardDate}>{date}</div>
                </Card>
            )}
        </>
    )
}

export default Col;