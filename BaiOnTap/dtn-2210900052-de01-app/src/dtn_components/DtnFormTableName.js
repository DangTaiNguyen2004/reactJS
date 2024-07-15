import axios from '../dtn_apis/dtn-2210900052'
import React, { useEffect, useState } from 'react'

export default function DtnFormTableName({renderDtnTableName, onDtnEdit}) {

    const [dtnId,setDtnId] = useState(renderDtnTableName.dtnId)
    const [dtnTbName,setDtnTbName] = useState(renderDtnTableName.dtnTbName)
    const [dtnTbEmail,setDtnTbEmail] = useState(renderDtnTableName.dtnTbEmail)
    const [dtnTbPhone,setDtnTbPhone] = useState(renderDtnTableName.dtnTbPhone)
    const [dtnTbStatus,setDtnTbStatus] = useState(renderDtnTableName.dtnTbStatus)

    useEffect(()=>{
        setDtnId(renderDtnTableName.dtnId)
        setDtnTbName(renderDtnTableName.dtnTbName)
        setDtnTbEmail(renderDtnTableName.dtnTbEmail)
        setDtnTbPhone(renderDtnTableName.dtnTbPhone)
        setDtnTbStatus(renderDtnTableName.dtnTbStatus)
    },[renderDtnTableName])

    const dtnHandleSubmit = async (dtnEvent)=>{
        dtnEvent.preventDefault();
        const dtnObjTableName = {
            "dtnTbName": dtnTbName,
            "dtnTbEmail": dtnTbEmail,
            "dtnTbPhone": dtnTbPhone,
            "dtnTbStatus": dtnTbStatus,
            "dtnId": dtnId
        }
        console.log(dtnObjTableName);

        await axios.put("dtnTableName/"+dtnObjTableName.dtnId,dtnObjTableName);
        onDtnEdit();
    }
  return (
    <div>
    <h2>Form xử lí dữ liệu sửa thông tin</h2>
    <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="dtnId">dtnId</span>
            <input type="text" className="form-control" placeholder="dtnId" 
            name='dtnId'
            value={dtnId}
            onChange={(dtnEv)=>setDtnId(dtnEv.target.value)}
            aria-label="dtnId" 
            aria-describedby="dtnId" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="dtnTbName">dtnTbName</span>
            <input type="text" className="form-control" placeholder="dtnTbName" 
            name='dtnTbName'
            value={dtnTbName}
            onChange={(dtnEv)=>setDtnTbName(dtnEv.target.value)}
            aria-label="dtnTbName" 
            aria-describedby="dtnTbName" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="dtnTbEmail">dtnTbEmail</span>
            <input type="text" className="form-control" placeholder="dtnTbEmail" 
            name='dtnTbEmail'
            value={dtnTbEmail}
            onChange={(dtnEv)=>setDtnTbEmail(dtnEv.target.value)}
            aria-label="dtnTbEmail" 
            aria-describedby="dtnTbEmail" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="dtnTbPhone">dtnTbPhone</span>
            <input type="text" className="form-control" placeholder="dtnTbPhone" 
            name='dtnTbPhone'
            value={dtnTbPhone}
            onChange={(dtnEv)=>setDtnTbPhone(dtnEv.target.value)}
            aria-label="dtnTbPhone" 
            aria-describedby="dtnTbPhone" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="dtnTbStatus">dtnTbStatus</span>
            <select name='dtnTbStatus' id='dtnTbStatus' className='form-control' value={dtnTbStatus} onChange={(dtnEv)=>setDtnTbStatus(dtnEv.target.value)}>
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>
        <button className='btn btn-primary my-3' name='btnDtnSave' onClick={dtnHandleSubmit}>DTN: Save</button>
    </form>
    </div>
  )
}
