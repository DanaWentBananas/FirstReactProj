import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters'
import Navbar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <Navbar />
    <main className='container'>
        <Counters />
    </main>
    
  </React.Fragment>
);



