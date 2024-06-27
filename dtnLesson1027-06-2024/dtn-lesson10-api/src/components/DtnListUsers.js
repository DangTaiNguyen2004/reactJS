import React from 'react'

export default function DtnListUsers({renderDtnListUsers}) {
    console.log("DtnListUsers",renderDtnListUsers);

    let dtnElementUsers = renderDtnListUsers.map((dtnUser,index)=>{
        return(
            <>
                <tr>
                    <td>{dtnUser.id}</td>
                    <td>{dtnUser.UserName}</td>
                    <td>{dtnUser.PassWord}</td>
                    <td>{dtnUser.Email}</td>
                    <td>{dtnUser.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
            
        
    })
  return (
    <div className='row'>
      <table className='table table-border'>
        <thead>
            <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>PassWord</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Chuc nang</th>
            </tr>
        </thead>
        <tbody>
            {dtnElementUsers}
        </tbody>
      </table>
    </div>
  )
}
