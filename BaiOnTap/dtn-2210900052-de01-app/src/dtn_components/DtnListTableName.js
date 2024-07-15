import React from 'react'

export default function DtnListTableName({renderDtnListTableName,onDtnDelete,onDtnEdit}) {
    console.log("List:",renderDtnListTableName);
    const dtnElementTableName = renderDtnListTableName.map((dtnItem,dtnIndex)=>{
        return(
            <tr key={dtnIndex}>
                <td>{dtnItem.dtnId}</td>
                <td>{dtnItem.dtnTbName}</td>
                <td>{dtnItem.dtnTbEmail}</td>
                <td>{dtnItem.dtnTbPhone}</td>
                <td>{(dtnItem.dtnTbStatus===true || dtnItem.dtnTbStatus==="true")?"Active":"Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'
                        onClick={()=>dtnHandelEdit(dtnItem)}
                    >dtn_edit</button>
                    <button className='btn btn-danger'
                        onClick={()=>dtnHanldeDelete(dtnItem.dtnId)}
                        >dtn_delete</button>
                </td>
            </tr>
        );
    })

    const dtnHanldeDelete = (dtnId)=>{
        if(window.confirm('bạn có muốn xóa dữ liệu có dtnId=' + dtnId)){
           onDtnDelete(dtnId); 
        }
        
    }
    const dtnHandelEdit = (dtnObjTableName)=>{
        onDtnEdit(dtnObjTableName)
    }
  return (
    <div>
      <h2>Danh sách thông tin</h2>
      <hr/>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>dtnId</th>
                <th>dtnTbName</th>
                <th>dtnTbEmail</th>
                <th>dtnTbPhone</th>
                <th>dtnTbStatus</th>
                <th>dtn: Chức năng</th>
            </tr>
        </thead>
        <tbody>
            {dtnElementTableName}
        </tbody>
      </table>
    </div>
  )
}
