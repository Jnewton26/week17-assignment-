import axios from "axios";

export class ContactService {
    static serverURl = `http://localhost:9000`;

    static getGroups(){
        let dataURL = `${this.serverURl}/groups`;
        return axios.get(dataURL);
    }

    static getGroup()

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