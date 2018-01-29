// @flow
import React from 'react';
import ContactListItem from './ContactListItem';
import type {ContactItem} from './state';
type Props = {
  contactTitle: string,
  filteredItems: Array<ContactItem>,
  onSearchChange: Function,
  onClickItem: Function,
};
export default function ContactList(props: Props) {
  let {contactTitle, onSearchChange, filteredItems, onClickItem} = props;
  return (
    <div className="contactList">
      <div className="columnView">
        <h1>{contactTitle}</h1>
        <button type="button" className="btn btn-primary" style={{flex: 0.5}}>
          <span className="glyphicon glyphicon-plus" />
          Add
        </button>
        <br /> <br />
        <div className="rowView" role="group" style={{display: 'flex'}}>
          <input
            type="text"
            className="form-control"
            placeholder="Search something here..."
            style={{flex: 2}}
            onChange={onSearchChange}
          />
          {/* <span style={{flex: 0.2}}>&nbsp;</span> */}
        </div>
        <br />
        <ul className="list-group">
          {filteredItems.map((item) => (
            <ContactListItem
              key={item.id}
              contactData={item}
              onClickItem={onClickItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
