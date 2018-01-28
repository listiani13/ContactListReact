// @flow
import React, {Component} from 'React';
import type {State} from './state';
import ContactDetails from './ContactDetails';
// import ContactList from './ContactList';
import ContactListItem from './ContactListItem';

type Props = {};
class App extends Component<Props, State> {
  state = {
    contactListItems: [
      {
        id: '1',
        name: 'Adrian',
        phoneNo: +191302931,
        githubID: 'github.com/ad',
        isSelected: true,
      },
      {
        id: '2',
        name: 'Evan',
        phoneNo: +628121377353,
        githubID: 'github.com/ev',
        isSelected: false,
      },
      {
        id: '5',
        name: 'Gema',
        phoneNo: +628121377353,
        githubID: 'github.com/Gem',
        isSelected: false,
      },
      {
        id: '4',
        name: 'Jason',
        phoneNo: +628773123,
        githubID: 'github.com/Jas',
        isSelected: false,
      },
      {
        id: '8',
        name: 'Listiani',
        phoneNo: +628773123,
        githubID: 'github.com/listiani13',
        isSelected: false,
      },
      {
        id: '3',
        name: 'Rei',
        phoneNo: +62892103,
        githubID: 'github.com/rei',
        isSelected: false,
      },
      {
        id: '6',
        name: 'Simon',
        phoneNo: +62121377353,
        githubID: 'github.com/sim',
        isSelected: false,
      },
      {
        id: '7',
        name: 'Yosua',
        phoneNo: +681081,
        githubID: 'github.com/Yosua',
        isSelected: false,
      },
    ],
    searchValue: '',
    selectedID: '1',
  };
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
        <div className="contactList">
          <div className="columnView">
            <h1>{contactTitle}</h1>
            <button
              type="button"
              className="btn btn-primary"
              style={{flex: 0.5}}
            >
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
                  onClickItem={this._onClickItem}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* <ContactList
          style={{columnStyle, ulStyle}}
          contactTitle={contactTitle}
          contactListItems={filteredItems}
          onSearchChange={onSearchChange}
        /> */}
        <ContactDetails contactItem={selectedContactItem} />
      </div>
    );
  }
}
export default App;
