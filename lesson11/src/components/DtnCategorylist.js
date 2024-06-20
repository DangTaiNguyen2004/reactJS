import React from 'react'

export default function DtnCategorylist({renderDtnCategories, onAddNew, onDtnEdit}) {
    console.log("renderDtnCategories: ",  renderDtnCategories);

    let dtnCategoryElement = renderDtnCategories.map((dtnCategory,index) => {
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <td>{dtnCategory.dtnId}</td>
                <td>{dtnCategory.dtnCategoryName}</td>
                <td>{dtnCategory.dtnCategoryStatus===true?"Hiển thị":"Tạm Khóa"}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>dtnHandleDelete(dtnCategory.dtnId)}>Delete</button>
                </td>
                <td>
                    <button className='btn btn-cuccess' onClick={()=>dtnHandleEdit(dtnCategory)}>Edit</button>
                </td>
            </tr>
        )
    })

    const dtnHandleAdd = () =>{
        onAddNew(true);
    }
    const dtnHandleDelete = (dtnId) =>{
        
        if(window.confirm('Bạn có thật sự muốn xóa Category có mã['+dtnId+']khong?')){
            console.log("Delete:", dtnId);
        }else{

        }
       
    }
    //su kien cho nut sua
    const dtnHandleEdit = (dtnCategory) =>{
        onDtnEdit(dtnCategory);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sách loại sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã Loại</th>
                        <th>Tên Loại</th>
                        <th>Trạng Thái</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {dtnCategoryElement}
                </tbody>

            </table>
            <button className='btn btn-primary' onClick={dtnHandleAdd}>Thêm mới </button>
        </div>
    )
}