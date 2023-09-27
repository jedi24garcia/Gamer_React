import React from 'react';
import './contact.css';

function Contacts () {
    return (
        <div className="ContactDetails">
            <h1>Contact Us</h1>
            <div className="InfoDetails">
                <p>For any queries, give us a call or flick us an email on:<br/>
                For general information, please get in touch with us at (04) 987 5577 or info@gamertech.co.nz<br/>
                For all private hire, events, fundraiser enquiries and CVs, please email jessie@gamertech.co.nz<br/>
                For sponsorship, branding, and marketing, please email christina@gamertech.co.nz<br/>
                </p>
                <div className="ContactSales">
                    <p>Talk to a member of our Sales team</p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;