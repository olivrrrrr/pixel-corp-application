import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import CardList from './components/CardList'
import './index.css'


ReactDOM.render(
  <>
    <CardList/>
  </>
  ,
  document.getElementById('root')
);

// users.map(user=> <Card name={user.name} email={user.email}/>)