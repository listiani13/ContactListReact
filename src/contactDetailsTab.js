// @flow
import React from 'react';
type Props = {name: string, phoneNo: number, githubID: string};
export default function ContactDetailsTab(props: Props) {
  let {name, phoneNo, githubID} = props;
  return (
    <div className="panel panel-default">
      <div className="panel-heading c-list">
        <span className="title">Contact Details</span>
      </div>

      <ul className="list-group" id="contact-list">
        <li className="list-group-item">
          <div className="col-xs-12 col-sm-9">
            <table className="fullWidthTable">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Phone No.</td>
                  <td>:</td>
                  <td>{phoneNo}</td>
                </tr>
                <tr>
                  <td>Github ID</td>
                  <td>:</td>
                  <td>{githubID}</td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
          <div className="clearfix" />
        </li>
      </ul>
    </div>
  );
}
