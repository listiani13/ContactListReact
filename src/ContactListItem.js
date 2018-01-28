// @flow
import React from 'react';
import type {ContactItem} from './state';
type Props = {
  contactData: ContactItem,
  onClickItem: (id: string) => void,
};
export default function ContactListItem(props: Props) {
  let {onClickItem, contactData} = props;
  let className = 'list-group-item list-group-item-action';
  console.log(
    'props.contactData.isSelected',
    props.contactData.isSelected,
    props.contactData.name,
  );
  if (props.contactData.isSelected) {
    className = className.concat(className, ' active');
  }
  return (
    <a className={className} onClick={() => onClickItem(contactData.id)}>
      {contactData.name}
      <span className="greyed-out">
        {' (+'}
        {props.contactData.phoneNo}
        {')'}
      </span>
    </a>
  );
}
