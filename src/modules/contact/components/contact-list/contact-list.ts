import { WebAPI } from "../../../../../server/web-api";
import { inject, View } from "aurelia-framework";
import { IContact } from '../../models/contact.model';

@inject(WebAPI)
export class ContactList {

  contacts: IContact[];
  selectedId = 0;

  constructor(private readonly api: WebAPI) {

  }

  created() {
    this.api.getContactList()
      .then((contacts: IContact[]) => this.contacts = contacts)
  }

  select(contact: IContact): boolean {
    this.selectedId = contact.id;
    return true;
  }
}
