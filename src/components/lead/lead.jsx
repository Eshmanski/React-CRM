import { useContext } from 'react';
import { LeadsContext } from '../../App.js';
import { useParams } from 'react-router-dom';


function Lead() {
    const { leads } = useContext(LeadsContext);

    const { id } = useParams(),
        lead = leads.find(item => item.id === Number(id));

    return (
        <div>
            <h2>
                Заявка #{lead?.id} {lead?.title}
            </h2>
            <h3>
                Описание заявки.
            </h3>
            <p>
                {lead?.description}
            </p>
            <p>Телефон: {lead?.phone}</p>
            <p>Дата заявки: {lead?.date}г</p>
        </div>
    )
};

export default Lead;