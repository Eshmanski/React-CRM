import { useParams, useHistory } from 'react-router-dom';
import './Leads.css'
const leads = [
    {
        id: 1,
        title: 'Сергей Иванов',
        status: 'todo',
        phone: '79998347733',
        date: '14.12.2020',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
    },
    {
        id: 2,
        title: 'Степан Суровый',
        status: 'in_progress',
        phone: '78882345423',
        date: '14.12.2020',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
    },
    {
        id: 3,
        title: 'Антон Игорев',
        status: 'todo',
        phone: '78882345423',
        date: '14.12.2020',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
    },
    {
        id: 4,
        title: 'Андрей Смирнов',
        status: 'in_progress',
        phone: '78882345423',
        date: '14.12.2020',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
    },
    {
        id: 5,
        title: 'Валерий Кирилов',
        status: 'done',
        phone: '78882345423',
        date: '14.12.2020',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
    },
    {
        id: 6,
        title: 'Антон Игорев',
        status: 'todo',
        phone: '78882345423',
        date: '09.11.2020',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
    },
    {
        id: 7,
        title: 'Андрей Смирнов',
        status: 'todo',
        phone: '78882345423',
        date: '11.10.2020',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
    },
    {
        id: 8,
        title: 'Игорь Степанов',
        status: 'done',
        phone: '78882345423',
        date: '12.12.2020',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
    },
];

const statuses = [
    {
        id: 1,
        title: 'Новые заявки',
        value: 'todo',
    },
    {
        id: 2,
        title: 'В обработке',
        value: 'in_progress',
    },
    {
        id: 3,
        title: 'Выполненные',
        value: 'done',
    },
]
export function Lead() {
    const { id } = useParams();
    const lead = leads.find(item => item.id === Number(id));

    return (
        <div>
            <h2>
                Заявка #{lead?.id} {lead?.title}
            </h2>
            <h3>
                Описание заявки.
            </h3>
            <p>
                {lead.description}
            </p>
            <p>Телефон: {lead.phone}</p>
            <p>Дата заявки: {lead.date}г</p>
        </div>
    )
};

function LeadsColumn(props) {
    const leadsColumn = leads.filter(item => item.status === props.name);

    let history = useHistory();
    function handleClick(id) {
        history.push(`/leads/${id}`);
    }

    if (leadsColumn.length === 0) {
        return (
            <>
                <div>Заявок нет</div>
                <div className='lead-card unvisible'></div>
            </>
        )
    }

    return (
        <>
            {leadsColumn.map(({ id, title, phone, date }) =>
                <div className='lead-card' onClick={() => handleClick(id)} key={id}>
                    <div className='lead-card-name'>{title}</div>
                    <div className='lead-card-phone'>{phone}</div>
                    <div className='lead-card-date'>{date}</div>
                </div>
            )}
        </>
    )
}

function Leads() {
    return (
        <div className='lead-columns'>
            {statuses.map(({ id, title, value }) =>
                <div key={id}>
                    <div className='leads-column-header' >{title}</div>
                    <LeadsColumn name={value} title={title} />
                </div>
            )}
        </div>
    )
};

export default Leads;