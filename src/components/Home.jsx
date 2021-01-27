import { Button } from '@material-ui/core';
import { LeadsContext } from '../App.js';
import { useContext, useState } from 'react';


function Home() {
    const { leads, addLead } = useContext(LeadsContext),
        [userInfo, setUserInfo] = useState({
            firstName: '',
            secondName: '',
            phone: '',
            description: '',
        });

    const handleChange = (event) => {
        const target = event.target,
            name = target.name,
            value = target.value;
        const newUserInfo = Object.assign(userInfo, {[name]: value})
        setUserInfo(newUserInfo);

        console.log(userInfo);
    }

    const handleAddLead = (event) => {
        console.log(userInfo);
        const time = new Date(),
            lead = {
                id: leads.length,
                title: userInfo.firstName + ' ' + userInfo.secondName,
                status: 'todo',
                phone: userInfo.phone,
                date: time.toLocaleDateString(),
                description: userInfo.description,
            };
        addLead([...leads, lead]);
        event.preventDefault();
    };

    return (
        <div>
            <h2> Home page </h2>
            <form onSubmit={handleAddLead}>
                <input type='text' value={userInfo.firstName} onChange={handleChange} name='firstName'/>
                <input type='text' value={userInfo.secondName} onChange={handleChange} name='secondName'/>
                <input type='text' value={userInfo.phone} onChange={handleChange} name='phone'/>
                <textarea value={userInfo.description} onChange={handleChange} name='description'></textarea>
                <Button variant='contained' type='submit'>Добавить</Button>
            </form>
        </div>
    )
}

export default Home;