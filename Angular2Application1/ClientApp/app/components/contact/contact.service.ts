import {Injectable} from '@angular/core';
//import 'rxjs/add/operator/toPromise';

export class Contact {
    constructor(public id: number, public name: string) { }
}

const CONTACTS: Contact[] = [
    new Contact(21, 'Sam Spade'),
    new Contact(22, 'Nick Danger'),
    new Contact(23, 'Nancy Drew')
];
const LATENCY = 500;
@Injectable()
export class ContactService {
   
    getContacts(): Promise<Contact[]> {
        return new Promise<Contact[]>(resolve => {
            setTimeout(() => { resolve(CONTACTS); }, LATENCY);
        });
    }
    getContact(id: string | number) {
        return this.getContacts().then(response => response.find(contact => contact.id === +id));
    }
}