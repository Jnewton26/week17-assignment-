import axios from "axios";
import React from "react";

export default class ContactService extends React.Component{
    static serverURl = `http://localhost:9000`;

    static getGroups(){
        let dataURL = `${this.serverURl}/groups`;
        return axios.get(dataURL);
    }

    static getGroup(contact){
        let groupId = contact.groupId;
        let dataURL = `${this.serverURl}/groups/${groupId}`;
        return axios.get(dataURL);
    }

    static getAllContacts(){
        let dataURL = `${this.serverURl}/contacts`;
        return axios.get(dataURL);
    }

    static getContact(contactId){
        let dataURL = `${this.serverURl}/contacts/${contactId}`;
        return axios.get(dataURL);
    }

    static createContact(contact){
        let dataURL = `${this.serverURl}/contacts`;
        return axios.post(dataURL, contact);
    }

    static updateContact (contact , contactId){
        let dataURL = `${this.serverURl}/contacts/${contactId}`;
        return axios.put(dataURL, contact);
    }

    static deleteContact(contactId){
        let dataURL = `${this.serverURl}/contacts/${contactId}`;
        return axios.delete(dataURL);
    }

}

// export default ContactService;