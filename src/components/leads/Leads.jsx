import { useContext } from 'react';
import { LeadsContext } from '../../App.js';
import s from './leads.module.css';
import Col from './col/Col';


const statuses = [
    {
        id: 1,
        title: 'Новые заявки',
        name: 'todo',
    },
    {
        id: 2,
        title: 'В обработке',
        name: 'in_progress',
    },
    {
        id: 3,
        title: 'Выполненные',
        name: 'done',
    },
];




function Leads() {
    const { leads, removeLead } = useContext(LeadsContext);

    function delLead(event, id) {
        const result = leads.filter(item => item.id !== Number(id));
    
        removeLead(result);
    
        event.preventDefault();
    }

    return (
        <div className={s.cols}>
            {statuses.map(({ id, title, name }) =>
                <div key={id}>
                    <div className={s.colHeader} >{title}</div>
                    <Col name={name} leads={leads} onClick={delLead} />
                </div>
            )}
        </div>
    )
};

export default Leads;