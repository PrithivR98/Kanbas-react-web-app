import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTachometerAlt, faBook, faCalendar, faInbox, faHistory, faChalkboard, faComments, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './index.css'; // Import the CSS file

function KanbasNavigation() {
    const links = [
        { link: "Account", icon: faUser },
        { link: "Dashboard", icon: faTachometerAlt },
        { link: "Courses", icon: faBook },
        { link: "Calendar", icon: faCalendar },
        { link: "Inbox", icon: faInbox },
        { link: "History", icon: faHistory },
        { link: "Studio", icon: faChalkboard },
        { link: "Comments", icon: faComments },
        { link: "Help", icon: faQuestionCircle }
    ];

    const { pathname } = useLocation();

    const listItemStyle = {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        margin: '5px',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '60px',
        fontSize: '7px',
    };

    const iconStyle = {
        fontSize: '32px',
        marginBottom: '5px',
        color:'red'
    };

    const linkTextStyle = {
        color: 'white', // Set the font color to white
    };

    return (
        <div className="sidebar">
        <img src={require('./northeastern_logo.png')} alt="College Emblem" className="college-emblem" />
            <ul className="navigation-list">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.link) ? 'active' : ''} style={listItemStyle}>
                        <Link to={`/Kanbas/${link.link}`}>
                            <FontAwesomeIcon icon={link.icon} size="2x" style={iconStyle} />
                            <span style={linkTextStyle}>{link.link}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default KanbasNavigation;

