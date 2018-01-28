// // @flow
// import React, {Component} from 'react';
// import ContactListItem from './ContactListItem';
// import type {ContactItem} from './state';
// type Props = {
//   contactTitle: string,
//   contactListItems: Array<ContactItem>,
//   style: Object,
//   onSearchChange: (searchValue: string) => void,
// };
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
// // export default function ContactList(props: Props) {
// //   let contactListStyle = {
// //     flex: 1,
// //     backgroundColor: 'pink',
// //     padding: '2%',
// //   };
// //   let {columnStyle, ulStyle, onSearchChange} = props.style;
// //   let {contactListItems} = props;
// //   let filteredItems = [];
// //   let onChange = (event) => {
// //     let searchValue = event.target.value;
// //     console.log('onChange');
// //     if (searchValue === '') {
// //       filteredItems = contactListItems;
// //     } else {
// //       let lowerSearchValue = searchValue.toLowerCase();
// //       console.log('searching is begin');
// //       filteredItems = contactListItems.filter((item) => {
// //         return item.name.toLowerCase().includes(lowerSearchValue);
// //       });
// //     }
// //   };
// //   return (
// //     <div style={contactListStyle}>
// //       <div style={columnStyle}>
// //         <h1>{props.contactTitle}</h1>
// //         <input type="text" placeholder="Search..." onChange={onChange} />
// //         <ul style={ulStyle}>
// //           {filteredItems.map((item) => (
// //             <ContactListItem key={item.id} contactData={item} />
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }
