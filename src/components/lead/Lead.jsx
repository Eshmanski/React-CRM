import { useContext } from 'react';
import { LeadsContext } from '../../App.js';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import s from './lead.module.css';

function Lead() {
  const { leads, removeLead } = useContext(LeadsContext),
    { id } = useParams(),
    lead = leads.find((item) => item.id === Number(id)),
    history = useHistory();

  function changeLead(event) {
    history.push(`/leads/${id}/edit`);

    event.preventDefault();
  }

  function delLead(event) {
    const result = leads.filter(item => item.id !== Number(id));

    removeLead(result);
    
    history.push(`/leads`);

    event.preventDefault();
  }

  return (
    <div>
      <div>
        <h4>Заявка #{lead?.id}</h4>
        <h2>{lead?.title}</h2>
        <h3>Описание заявки.</h3>
        <p>{lead?.description}</p>
        <p>Телефон: {lead?.phone}</p>
        <p>Дата заявки: {lead?.date}г</p>
      </div>
      <div className={s.btn}>
        <Button onClick={changeLead} variant='contained' type='button'>
          Изменить
        </Button>
        <Button  onClick={delLead} variant='contained' type='button'>
          Удалить
        </Button>
      </div>
    </div>
  );
}

export default Lead;
