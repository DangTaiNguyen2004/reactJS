import React from 'react'

export default function VhnStudentList({renderVhnStudentList}) {
    console.log("Data:",renderVhnStudentList);
    let vhnElement = renderVhnStudentList.map((vhnStudent, index) => {
        return (
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{vhnStudent.vhnid}</td>
            <td>{vhnStudent.vhnName}</td>
            <td>{vhnStudent.vhnAge}</td>
            <td>{vhnStudent.vhnPhone}</td>
            <td>{vhnStudent.vhnEmail}</td>
            <td>{vhnStudent.vhnStatus}</td>
            <td>
                Edit / Delete
            </td>
        </tr>
        )
    });
    return (
        <div>
            <h2>Danh sach sinh vien</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ma sinh vien</th>
                        <th scope="col">Ho Ten</th> 
                        <th scope="col">Tuoi</th>
                        <th scope="col">Dien Thoai</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trang Thai</th>     
                        <th scope="col">Chuc Nang</th>
                    </tr>
                </thead>
                <tbody>
                  {vhnElement}
                </tbody>
            </table>

        </div>
    )
}
