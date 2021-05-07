import React from 'react';
import UserState from './stores/users-store/userState';
import UserList from './components/UserList';
import RegisterUser from "./components/RegisterUser";
const App = () => {
  return (
      <div className="p-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
          <UserState>
              <RegisterUser />
              <UserList/>
          </UserState>
      </div>
  );
};

export default App;

