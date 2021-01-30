import { Button, InputLabel, Input, FormControl, TextField } from '@material-ui/core';
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
                <FormControl>
                    <InputLabel htmlFor='firstName'>Имя:</InputLabel>
                    <Input id='firstName' type='text' value={formProps.firstName} onChange={handleChange} name='firstName' />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='secondName'>Фамилия:</InputLabel>
                    <Input id='secondName' type='text' value={formProps.secondName} onChange={handleChange} name='secondName' />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='phone'>Телефон:</InputLabel>
                    <Input id='phone' type='text' value={formProps.phone} onChange={handleChange} name='phone' />
                </FormControl>
                <TextField
                    id="description"
                    label="Описание заявки:"
                    multiline
                
                    value={formProps.description}
                    onChange={handleChange}
                    name='description'
                />
                <Button variant='contained' type='submit'>Добавить</Button>
            </form>
        </div>
    )
}

export default Home;