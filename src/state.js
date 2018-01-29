// @flow

export type ContactItem = {
  id: string,
  name: string,
  phoneNo: number,
  githubID: string,
  isSelected: boolean,
};

export type State = {
  contactListItems: Array<ContactItem>,
  searchValue: string,
  selectedID: string,
};
export let state = {
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
