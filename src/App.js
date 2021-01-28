import React, { useState, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFaund';
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home';
import Leads from './components/leads/Leads';
import Lead from './components/lead/lead'
import './App.css';

const initialLeads = [
  {
      id: 0,
      title: 'Сергей Иванов',
      status: 'todo',
      phone: '79998347733',
      date: '14.12.2020',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
  },
  {
      id: 1,
      title: 'Степан Суровый',
      status: 'in_progress',
      phone: '78882345423',
      date: '14.12.2020',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
  },
  {
      id: 2,
      title: 'Антон Игорев',
      status: 'todo',
      phone: '78882345423',
      date: '14.12.2020',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
  },
  {
      id: 3,
      title: 'Андрей Смирнов',
      status: 'in_progress',
      phone: '78882345423',
      date: '14.12.2020',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
  },
  {
      id: 4,
      title: 'Валерий Кирилов',
      status: 'done',
      phone: '78882345423',
      date: '14.12.2020',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
  },
  {
      id: 5,
      title: 'Антон Игорев',
      status: 'todo',
      phone: '78882345423',
      date: '09.11.2020',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
  },
  {
      id: 6,
      title: 'Андрей Смирнов',
      status: 'todo',
      phone: '78882345423',
      date: '11.10.2020',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
  },
  {
      id: 7,
      title: 'Игорь Степанов',
      status: 'done',
      phone: '78882345423',
      date: '12.12.2020',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit deserunt illo, unde eos eveniet ab dolor optio iusto numquam a, ea consequuntur dolorem, iure nostrum! Saepe, officiis quasi. Molestiae!',
  },
];

const app = {
  leads: [],
  addLead: () => { },
  removeLead: () => { },
  editLead: () => { },
};

export const LeadsContext = React.createContext(app);

function App() {
  const [leads, setLeads] = useState(initialLeads);

  const value = useMemo( () => ({
    leads,
    addLead: setLeads,
    removeLead: setLeads,
    editLead: setLeads,
  }), [leads, setLeads]);

  return (
    <div className="App">
      <LeadsContext.Provider value={value}  >
      <Navigation />

      <Switch>
        <Route
          path='/'
          exact
          component={Home}
        />

        <Route
          path='/leads/:id'
          exact
          component={Lead}
        />

        <Route
          path='/leads'
          exact
          component={Leads}
        />

        <Route
          path='*'
          component={PageNotFound}
        />
      </Switch>
      </LeadsContext.Provider>      
    </div>
  );
}

export default App;
