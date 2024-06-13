import React from "react";

export default function VuongStudentList({renderVuongStudentList}) {
    console.log("Data",renderVuongStudentList);
    let vuongElement = renderVuongStudentList.map((vuongStudent, index)=>{
        return (
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{vuongStudent.name}</td>
            <td>{vuongStudent.tuoi}</td>
            <td>{vuongStudent.diachi}</td>
            <td>{vuongStudent.id}</td>
        </tr>
        )
    });
    return (
        <div>
            <h2> danh sach sinh vien </h2>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">diachi</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                {vuongElement}
                </tbody>
            </table>
        </div>
    )
}