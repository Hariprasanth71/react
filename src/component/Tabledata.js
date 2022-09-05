import React from "react";

class TableData extends React.Component {
  render() {
    return (
      <div>
        <table >
          <thead className="list">
            <tr>
              <th className="list">
                <b>SLNO</b>
              </th>

              <th className="list">
                <b>FirstName</b>
              </th>

              <th className="list">
                <b>LastName </b>
              </th>
            </tr>
          </thead>
          {this.props.todoItems.map((item, index) => {
            return (
              <tbody key={item.key} >
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default TableData;
