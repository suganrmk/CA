import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { airplay, user } from 'react-icons-kit/feather/'

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebartop">
                <Link to="/" className="logo">
                    <span>CA App</span>
                </Link>
            </div>
            <ul className="sidebarmenu">
                <li> <Link   to="/"> <Icon className="icol" icon={airplay} /> <span>Dashboard</span></Link> </li>
                <li> <Link  className="active" to="/clientList"> <Icon className="icol" icon={user} /><span>Contacts</span></Link> </li>
                <li> <Link to="/addclient"> <Icon className="icol" icon={user} /><span>Tasks</span></Link> </li>
                <li> <Link to="/admin"><Icon className="icol" icon={user} /><span>Employees</span></Link> </li>
            </ul>

            <ul className="sidebarmenu">
                <li> <Link to="/"> <Icon className="icol" icon={airplay} /> <span>Documents</span></Link> </li>
                <li> <Link to="/clientList"> <Icon className="icol" icon={user} /><span>Purchaces </span></Link> </li>

            </ul>

            <ul className="sidebarmenu">
                <li> <Link to="/admin"><Icon className="icol" icon={user} /><span>Timesheet</span></Link> </li>
                <li> <Link to="/"> <Icon className="icol" icon={airplay} /> <span>Finance</span></Link> </li>
                <li> <Link to="/admin"><Icon className="icol" icon={user} /><span>Reports</span></Link> </li>
            </ul>
        </aside>
    )
}

export default Sidebar;