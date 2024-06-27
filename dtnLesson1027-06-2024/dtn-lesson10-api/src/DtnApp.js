import './App.css';
import DtnListUsers from './components/DtnListUsers';
import axios from './api/dtnApi';
import { useEffect, useState } from 'react';

function DtnApp() {

  const [dtnListUsers,setDtnListUsers] = useState([]);


  const dtnGetAllUsers = async ()=>{
    const dtnResponse = await axios.get("dtnUser");
    console.log("Api Data:",dtnResponse.data);
    setDtnListUsers(dtnResponse.data)
  }

  useEffect(()=>{
    dtnGetAllUsers();
    console.log("State Data:", dtnListUsers);
  },[])

  return (
    <div className="container border my-3">
      <h1>lam viec voi MocApi</h1>
      <hr/>
      <DtnListUsers renderDtnListUsers={dtnListUsers}/>

    </div>
  );
}

export default DtnApp;
