import { useContext, useState } from 'react';
import { LeadsContext } from '../../App.js';
import { useParams, useHistory } from 'react-router-dom';
import { Button, InputLabel, Input, FormControl, TextField, Select } from '@material-ui/core';
import s from './lead-edit.module.css';

function LeadEdit() {
  const { leads, editLead } = useContext(LeadsContext),
    { id: idURL } = useParams(),
    {id, title, status, phone, date, description} = leads.find((item) => item.id === Number(idURL)),
    history = useHistory(),
    [changeLead, setChangeLead] = useState({
      title: title,
      status: status,
      phone: phone,
      description: description,
    })

  const undoEdit = (event) => {
      history.push(`/leads/${idURL}`);

      event.preventDefault();
  }

  const handleChange = (event) => {
      const value = event.target.value,
          name = event.target.name;

      setChangeLead({...changeLead, [name]: value});
  }

  const handleSave = (event) => {
    const result = leads.filter(item => item.id !== Number(id));
    
    changeLead.id = id;
    changeLead.date = date;

    editLead([...result, changeLead]);
    
    history.push(`/leads/${id}`);

    event.preventDefault();
  }
  
  return (
    <div>
    <h2>Редактирование заявки №{id}</h2>
    <form className={s.form} onSubmit={handleSave}>
      <FormControl>
        <InputLabel htmlFor='title'>Имя:</InputLabel>
        <Input
          id='title'
          type='text'
          value={changeLead.title}
          onChange={handleChange}
          name='title'
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='phone'>Телефон:</InputLabel>
        <Input
          id='phone'
          type='text'
          value={changeLead.phone}
          onChange={handleChange}
          name='phone'
        />
      </FormControl>
      <TextField
        id='description'
        label='Описание заявки:'
        multiline
        value={changeLead.description}
        onChange={handleChange}
        name='description'
      />
      <FormControl>
        <InputLabel htmlFor="status">Статус</InputLabel>
        <Select
          native
          value={changeLead.status}
          onChange={handleChange}
          inputProps={{
            name: 'status',
            id: 'status',
          }}
        >
          <option value={'todo'}>To do</option>
          <option value={'in_progress'}>In Progress</option>
          <option value={'done'}>Done</option>
      </Select>
      </FormControl>
      <Button variant='contained' type='submit'>
        Сохранить
      </Button>
      <Button onClick={undoEdit} variant='contained' type='button'>
        Отменить
      </Button>
    </form>
    </div>
  );
}
 
export default LeadEdit;