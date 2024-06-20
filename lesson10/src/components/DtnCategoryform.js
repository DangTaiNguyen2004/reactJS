import React, { useEffect, useState } from 'react'

export default function DtnCategoryform({onCloseForm,  renderDtncategory}) {
    const [dtnId,setDtnId] = useState("");
    useEffect(() =>{
        setDtnId(renderDtncategory.dtnId);
    });
    const dtnHandleClose = () => {
      onCloseForm(false);
    }
    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input type="text" className="form-control"
                        name='dtnCategoryName'
                        placeholder="Category Name" aria-label="Category Name"
                        aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Category Status</span>
                       <select className='form-control'
                       name='dtnCategoryStatus'
                       value={''}>
                       <option value={true}>Hiển thị</option>
                       <option value={false}>Tạm khóa</option>
                       </select>
                        
                      
                </div>
                <button className='btn btn-success'>Ghi lại</button>
                <button className='btn btn-danger' onClick={dtnHandleClose}>Đóng</button>
            </form>
        </div>
    )
}