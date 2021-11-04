import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import React from 'react';

function App() {
  return (
    <div>
      <div />
      <div>
        <div exact path="/all" component={AllUsers} />
        <div exact path="/add" component={AddUser} />
        <div exact path="/edit/:id" component={EditUser} />
      </div>
    </div>
  );
}

export default App;
