import React, { Component } from 'react'
import Clientlist from '../../containers/clientlist';

import { getClients } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-icons-kit'

import { layers , plus , alignJustify} from 'react-icons-kit/feather/'

class client extends Component {

  componentDidMount() {
    this.props.getClients();
    console.log(this.props.getClients())
  }


  render() {
    return (
      <div className="clientlistpage">
        <div className="titlebar">
          <span><Icon className="icol" icon={layers} /> Client List</span>
          <div class="righsidedoptions">
          <Icon className="icol themebg" icon={plus} />
          <Icon className="icol" icon={alignJustify} />
          </div>
        </div>
        <Clientlist />
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

export default connect(mapStateToProps, mapDispatchToProps)(client); 