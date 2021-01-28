import { Button } from '@material-ui/core';
import { LeadsContext } from '../../App.js';
import { useContext, useState } from 'react';
import s from './home.module.css';

function Home() {
    const { leads, addLead } = useContext(LeadsContext),
        [formProps, setFormProps] = useState({
            firstName: '',
            secondName: '',
            phone: '',
            description: '',
        });

    const handleChange = (event) => {
        const value = event.target.value,
            name = event.target.name,
            copyFormProps = Object.assign({}, formProps);

        copyFormProps[name] = value;

        setFormProps(copyFormProps);
    }

    const handleAddLead = (event) => {
        const { firstName, secondName, phone, description } = formProps,
            date = new Date(),
            lead = {
                id: leads.length,
                title: firstName + ' ' + secondName,
                status: 'todo',
                phone: phone,
                date: date.toLocaleDateString(),
                description: description,
            };

        addLead([...leads, lead]);
        
        setFormProps({
            firstName: '',
            secondName: '',
            phone: '',
            description: '',
        });
        
        event.preventDefault();
    };

    return (
        <div>
            <h2> Home page </h2>
            <form className={s.form} onSubmit={handleAddLead}>
                <label>
                    <div>Имя:</div>
                    <input type='text' value={formProps.firstName} onChange={handleChange} name='firstName' />
                </label>
                <label>
                    <div>Фамилия:</div>
                    <input type='text' value={formProps.secondName} onChange={handleChange} name='secondName' />
                </label>
                <label>
                    <div>Телефон:</div>
                    <input type='text' value={formProps.phone} onChange={handleChange} name='phone' />
                </label>
                <label>
                    <div>Описание:</div>
                    <textarea value={formProps.description} onChange={handleChange} name='description'></textarea>
                </label>
                <Button variant='contained' type='submit'>Добавить</Button>
            </form>
        </div>
    )
}

export default Home;