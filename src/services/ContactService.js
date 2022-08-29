import axios from "axios";
import React from "react";

export default class ContactService extends React.Component{
    static serverURl = `http://localhost:9000`;

    static getGroups(){
        let dataURL = `${this.serverURl}/groups`;
        return axios.get(dataURL);
    }

    static getGroup(){
        let dataURL =`${this.serverURl}/group`;
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
}

// export default ContactService;