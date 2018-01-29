// @flow
import React from 'react';
import ContactDetailsTab from './ContactDetailsTab';
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
      <table className="tableContactDetails fullWidthTable">
        <thead>
          <tr>
            <td style={{width: '170px'}}>
              <div className="display-picture" />
            </td>
            <td>
              <h1>{name}</h1>
            </td>
            <td colSpan="3">&nbsp;</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: '10px'}} colSpan="7" />
          </tr>
          <tr>
            <td colSpan="7">
              <ContactDetailsTab
                name={name}
                phoneNo={phoneNo}
                githubID={githubID}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
