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
