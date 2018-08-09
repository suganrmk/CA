import React, { Component } from 'react'
import Clientlist from '../../containers/clientlist';

import { getClients } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-icons-kit';

import { layers, plus, alignJustify } from 'react-icons-kit/feather/';
import  ContactTable  from '../templates/contactTable';
import  SimpleTabs  from '../templates/customTab';

class ClientDetail extends Component {

    componentDidMount() {
        this.props.getClients();
        console.log(this.props.getClients())
    }


    render() {
        return (
            <div className="clientlistpage">
                
                <div className="clientlistsidebar wid30 brL">
                <div className="titlebar">
                    <span><Icon className="icol" icon={layers} />All Contact</span>
                    <div className="righsidedoptions">
                        <Icon className="icol themebg" icon={plus} />
                        <Icon className="icol" icon={alignJustify} />
                    </div>
                </div>
                    <ContactTable />
                </div>
                <div className="clientdetailview wid70">
                    <div className="clientdetailviewTop ">
                        <h4 className="leanh2 ">
                            Sugan Shunmugaraj
                        </h4>
                        <div className="top-right">
                            <button className="btn btn-default">Edit</button>
                        </div>
                    </div>

                    <div className="clientdetailbottom">
                        <SimpleTabs/>
                       
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        clients: state.clients
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getClients }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetail); 