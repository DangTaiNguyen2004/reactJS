import React, { useEffect, useState } from 'react'
import axios from "axios"
import VhnStudentList from './component/VhnStudentList'

function App() {
  const [vhnStudentList, setVhnStudentList] = useState([]);
  const vhnGetStudent = async () => {
    try {
      const response = await axios.get("https://666a97867013419182cff1e4.mockapi.io/api/vhnv1/vhnStudent");
      setVhnStudentList(response.data);

    } catch (error) {
      console.error("error fetching data:", error);
    }
  };
   useEffect(() => {
    vhnGetStudent();
   }, []);

  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>Xu ly chuc nang CRUD - HOOK - API</h1>
      <hr />
      < VhnStudentList renderVhnStudentList = {vhnStudentList} />
    </div>
  )
}

export default App
