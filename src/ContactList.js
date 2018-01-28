// @flow
import React, {Component} from 'react';
import ContactListItem from './ContactListItem';
import type {ContactItem} from './state';
type Props = {
  contactTitle: string,
  filteredItems: Array<ContactItem>,
  onSearchChange: Function,
  onClickItem: Function,
};
// type State = {
//   searchValue: string,
//   contactListItems: Array<ContactItem>,
// };
// class ContactList extends Component<Props, State> {
//   state = {
//     searchValue: '',
//     contactListItems: this.props.contactListItems,
//   };
//   // _onChange(event: Object) {
//   //   this.setState({searchValue: event.target.value});
//   // }
//   render() {
//     let {columnStyle, ulStyle} = this.props.style;
//     let {searchValue, contactListItems} = this.state;
//     let filteredItems;
//     let onSearchChange = (event: Object) => {
//       this.setState({searchValue: event.target.value});
//     };
//     if (searchValue === '') {
//       filteredItems = contactListItems;
//     } else {
//       let lowerSearchValue = searchValue.toLowerCase();
//       filteredItems = contactListItems.filter((item) => {
//         return item.name.toLowerCase().includes(lowerSearchValue);
//       });
//     }
//     return (
//       <div className="contactList">
//         <div className="columnView">
//           <h1>{this.props.contactTitle}</h1>
//           <div className="rowView" role="group" style={{display: 'flex'}}>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search something here..."
//               style={{flex: 2}}
//               onChange={onSearchChange}
//             />
//             <span style={{flex: 0.2}}>&nbsp;</span>
//             <button
//               type="button"
//               className="btn btn-primary"
//               style={{flex: 0.5}}
//             >
//               <span className="glyphicon glyphicon-plus" />
//               Add
//             </button>
//           </div>
//           <br />
//           <br />
//           <ul className="list-group">
//             {filteredItems.map((item) => (
//               <ContactListItem key={item.id} contactData={item} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
// export default ContactList;
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
