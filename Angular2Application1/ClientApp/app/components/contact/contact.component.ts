import {Component, OnInit} from '@angular/core';
import { ContactService, Contact } from './contact.service';
@Component({
    selector: 'app-contact',
    template: require('./contact.component.html'),
    styles: [require('./contact.component.css')]

})
export class ContactComponent implements OnInit {
    contacts: Contact[];
    contact: Contact;
    constructor(private contactService: ContactService) { }
    msg = "Contacts are being loaded ...";
    userName = '';
    ngOnInit(): void {
        this.contactService.getContacts().then(response => {
            this.msg = '';
            this.contacts = response;
            this.contact = this.contacts[0];
        });
    }
    next() {
        let ix = 1 + this.contacts.indexOf(this.contact);
        if (ix >= this.contacts.length) { ix = 0; }
        this.contact = this.contacts[ix];
    }

    onSubmit() {
        // POST-DEMO TODO: do something like save it
        this.displayMessage('Saved ' + this.contact.name);
    }

    newContact() {
        this.displayMessage('New contact');
        this.contact = { id: this.contacts.sort((a: Contact, b: Contact) => a.id - b.id).reverse()[0].id+1, name: '' };
        this.contacts.push(this.contact);
    }

/** Display a message briefly, then remove it. */
    displayMessage(msg: string) {
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
    }
}