import './App.css';
import React from 'react';
import AlertList from './Components/AlertList';
import Alert from './Components/Alert';

function App() {
  return (
    <>
      <div className="wrapper">
        <h1 className='mainhead'>Toast Notications</h1>
        {AlertList.map((alertItem, id) => (
          <Alert
            key={id} 
            type={alertItem.type}
            title={alertItem.title}
            id={alertItem.id}
            message={alertItem.message}
          >
          </Alert>
        ))}
      </div>
    </>
  );
}

export default App;

