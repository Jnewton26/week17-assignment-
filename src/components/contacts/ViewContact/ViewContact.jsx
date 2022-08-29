import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import ContactService from '../../../services/ViewContact/ContactService'
// import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";

let ViewContact = () => {

    let {contactId} = useParams();

    let [] = useState ({
        loading : false,
        contact : {},
        errorMessage : ''
    });

    useEffect(async() => {
        try {
            setState ({...StaticRange, loading: true});
            let response = await ContactService.getContact(contactId);
            setState ({
                ...state,
                loading : false,
                contact : response.data
            });
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });

        }

    }, [contactId]);

    let {loading, contact, errorMessage} = state;
    return (
        <React.Fragment>

            <section className="View-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint sit aspernatur, fugit facere quo doloribus magni quas rem iusto voluptatum.</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner/> : <React.Fragment>
                    {
                        Object.keys(contact).length > 0 &&
                        <section className="view-contact mt-3">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src={contact.photo} alt="" className="contact-img"/>
                                    </div>
                                    <div className="col-md-8">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-action">
                                                Name : <span className="fw-bold">contact.name</span>
                                            </li>
                                            <li className="list-group-item list-group-action">
                                                Mobile : <span className="fw-bold">{contact.mobile}</span>
                                            </li>
                                            <li className="list-group-item list-group-action">
                                                Email : <span className="fw-bold">{contact.email}</span>
                                            </li>
                                            <li className="list-group-item list-group-action">
                                                Company : <span className="fw-bold">{contact.company}</span>
                                            </li>
                                            <li className="list-group-item list-group-action">
                                                Title : <span className="fw-bold">{contact.title}</span>
                                            </li>
                                            <li className="list-group-item list-group-action">
                                                Group : <span className="fw-bold">{contact.groupId}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        }
                </React.Fragment>
            }
        </React.Fragment> 
    )
};

export default ViewContact;