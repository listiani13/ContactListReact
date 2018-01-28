// @flow
import React from 'react';
// import ContactListItem from './ContactListItem';
import type {ContactItem} from './state';
type Props = {
  contactItem: ContactItem,
};
export default function ContactList(props: Props) {
  let {name, phoneNo, githubID} = props.contactItem;
  console.log('props', props.contactItem.name);
  let contactDetailsStyle = {
    display: 'flex',
    padding: '2%',
    flex: 2,
    backgroundColor: 'white',
  };
  return (
    <div style={contactDetailsStyle}>
      {/* {'contact Details'} */}
      <table className="tableContactDetails">
        <tbody>
          <tr>
            <td>
              <div className="display-picture" />
            </td>
            <td style={{padding: '10px'}}>&nbsp;</td>
            <td>
              <h1>{name}</h1>
            </td>
          </tr>
          <tr>
            <td style={{padding: '5px'}} colSpan="3">
              &nbsp;
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Github ID</td>
            <td>:</td>
            <td>{githubID}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>:</td>
            <td>+{phoneNo}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
