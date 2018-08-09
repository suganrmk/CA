import React, { Component } from 'react';
import ClientForm from '../components/pages/clientForm';
import { Icon } from 'react-icons-kit';

import { layers, plus } from 'react-icons-kit/feather/';
const Addclient = (props) => {
    return (
        <div className="">
             <div className="titlebar">
                    <span><Icon className="icol" icon={plus} />Create New Contact</span>
                    <div className="righsidedoptions">
                    </div>
                </div>
            <ClientForm />
        </div>
    )
}

export default Addclient;