import React, { useEffect, useState } from 'react'
import DtnListTableName from './dtn_components/DtnListTableName'
import axios from './dtn_apis/dtn-2210900052'
import DtnFormTableName from './dtn_components/DtnFormTableName'

export default function DtnApp() {
  const [dtnListTableName, setDtnListTableName] = useState([])
  const dtnGetTableName = async ()=>{
    let dtnResp = await axios.get("dtnTableName");
    console.log("App list:",dtnResp.data);
    setDtnListTableName(dtnResp.data);
  }

  useEffect(()=>{
    dtnGetTableName();
  },[])


  const DtnHandleDelete= async (dtnId)=>{
    let dtnRes = await axios.delete("dtnTableName/"+dtnId);
    dtnGetTableName();

  }
  const dtnObjTableName = {
      "dtnTbName": "Đặng Tài Nguyên",
      "dtnTbEmail": "nguyendeptraiokk2004@gmail.com",
      "dtnTbPhone": "096362881",
      "dtnTbStatus": true,
      "dtnId": "2210900052"
  };
  const [dtnTableName,setDtnTableName] = useState(dtnObjTableName);
  
  //const DtnHandelAdd = ()=>{
  //  dtnGetTableName();
  //}
  const DtnHandelEdit = ()=>{
    dtnGetTableName();
  }

  const dtnHandleEdit = (dtnObjEditTableName)=>{
    setDtnTableName(dtnObjEditTableName)
  }
  return (
    <div className='container border my-3'>
      <h1>Bài đánh giá hết học phần - Đặng Tài Nguyên: 2210900052</h1>
      <hr/>
      <DtnListTableName renderDtnListTableName={dtnListTableName} onDtnDelete={DtnHandleDelete} onDtnEdit={dtnHandleEdit}/>
      <hr/>
      <DtnFormTableName renderDtnTableName={dtnTableName} onDtnEdit={DtnHandelEdit}/>
    </div>
  )
}
