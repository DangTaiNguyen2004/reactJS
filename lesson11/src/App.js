
import { useEffect, useState } from 'react';
import './App.css';
import DtnCategorylist from './components/DtnCategorylist';
import axios from './api/DtnApi';
import DtnCategoryform from './components/DtnCategoryform';

function App() {
  
  const [dtnCategories,setDtnCategories] = useState([]);

  const getCategories = async () => {
   try {
    const dtnCateRespose = await axios.get("DtnCategory");
    setDtnCategories(dtnCateRespose.data);
   } catch (error) {
    console.log("Lỗi", error);
   }
  }

  useEffect (() => {
    getCategories();
    console.log("dtnCategories: ", dtnCategories);
  }, [])
  //Trạng thái form
  const [dtnCategoryIsForm, setDtnCategoryIsFrom] = useState(false);
  const [dtnCategoryEdit, setDtnCategoryEdit] = useState("");
  const dtnHandleAddNew = (param) =>{
    setDtnCategoryIsFrom(param);
  }
  
  const dtnHandleCategoryCloseForm = (param) => {
    setDtnCategoryIsFrom(param);
  }
  const dtnHandleDelete =(dtnId) => {
    console.log("App-Delete-dtnId:",dtnId);
    
    const dtnRespose =  axios.delete('DtnCategory/${dtnId}');
    console.log("dtnRespoce - Delete",);
    let dtnDelete = dtnCategories.filter(x=>x.dtnId !== dtnId);
    setDtnCategories (dtnCategories);
    console.log("delete:",);
  }
  const dtnHandleEdit = (dtnCategory) => {
    setDtnCategoryEdit(dtnCategory)
    setDtnCategoryIsFrom(true);
  }
  return (
    <div className="container border my-3">
      <h1>Đặng Tài Nguyên - Call API</h1>

      <DtnCategorylist  renderDtnCategories = {dtnCategories}
                onAddNew={dtnHandleAddNew}
                onDtnDelete = {dtnHandleDelete}
                onDtnEdit= {dtnHandleEdit} />
      <hr/>
      {
        dtnCategoryIsForm ===true?<DtnCategoryform
        renderDtncategory= {dtnCategoryEdit}
        onCloseForm={dtnHandleCategoryCloseForm} />:""
      }
      
    </div>
  );
}

export default App;