// @flow
import React, {Component} from 'React';
import type {State} from './state';
import {state} from './state';
import ContactDetails from './ContactDetails';
import ContactList from './ContactList';
// import ContactListItem from './ContactListItem';

type Props = {};
class App extends Component<Props, State> {
  state = state;
  _onClickItem = (id: string) => {
    let newList = [...this.state.contactListItems];
    newList.forEach((item) => {
      if (item.isSelected && item.id !== id) {
        item.isSelected = false;
      }
      if (item.id === id) {
        item.isSelected = true;
      }
    });
    this.setState({selectedID: id, contactListItems: newList});
    // console.log('current state after being clicked', this.state);
  };
  render() {
    let {searchValue, contactListItems} = this.state;
    let contactTitle = 'My Contacts';
    let filteredItems;
    let onSearchChange = (event: Object) => {
      this.setState({searchValue: event.target.value});
    };
    if (searchValue === '') {
      filteredItems = contactListItems;
    } else {
      let lowerSearchValue = searchValue.toLowerCase();
      filteredItems = contactListItems.filter((item) => {
        return item.name.toLowerCase().includes(lowerSearchValue);
      });
    }

    let selectedContactIndex = this.state.selectedID;
    let getSelectedContactItem = () => {
      for (let item of contactListItems) {
        if (item.id === selectedContactIndex) {
          console.log('Got the item', item);
          return {
            ...item,
            isSelected: true,
          };
        }
      }
    };
    let selectedContactItem = getSelectedContactItem();
    console.log('selectedContactItem', selectedContactItem);
    return (
      <div className="outterDiv">
        <ContactList
          contactTitle={contactTitle}
          onSearchChange={onSearchChange}
          filteredItems={filteredItems}
          onClickItem={this._onClickItem}
        />
        <ContactDetails contactItem={selectedContactItem} />
      </div>
    );
  }
}
export default App;
