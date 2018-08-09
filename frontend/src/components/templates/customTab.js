import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" >
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({

    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 20,
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    tabSelected: {},
    typography: {
        padding: theme.spacing.unit * 1,
    },
});

class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className="hysasTab">
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Overview" />
                            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Tasks" />
                            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Attachment" />
                            <Tab  classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Notes" />
                        </Tabs>
                    </AppBar>
                    {value === 0 &&
                        <TabContainer>
                            <div className="conatactfulldetail">
                                <div className="lesftdet">
                                    <div className="contanctlefttop">
                                        <figure className="userimage"></figure>
                                        <div className="userifos">
                                            <span className="userinfoName">Sugan</span>
                                            <span className="userinfoemail">sugan@gmail.com</span>
                                            <span className="userinfocall">9994898345</span>
                                        </div>

                                        <div className="addresssection">
                                            <span className="headersectionTitle">
                                                ADDRESS
                                        </span>
                                            <address className="billingaddress">
                                                <span className="addresTitle">Billing Address</span>
                                                <span className="addresssect">
                                                    61A boltenpuram 3rd street, Thoothukudi 628003
                                            </span>
                                            </address>

                                            <address className="shippingaddress">
                                                <span className="addresTitle">Shipping Address</span>
                                                <span className="addresssect">
                                                    61A boltenpuram 3rd street, Thoothukudi 628003
                                            </span>
                                            </address>
                                        </div>

                                        <div className="addresssection">
                                            <span className="headersectionTitle">
                                                OTHER DETAILS
                                        </span>

                                        </div>
                                    </div>
                                </div>

                                <div className="rightsectioncontact">

                                    <div className="panelinfos">
                                        <span className="infopaneltile">
                                            Pending Tasks
                                        </span>
                                        <ul className="panelist">
                                            <li>
                                                <label className="taskname">TaskName</label>
                                                <span className="lastdate">Due Date: 20/08/2018 | </span>
                                                <span className="assignedby">Assigned By: sugan</span>
                                            </li>

                                            <li>
                                                <label className="taskname">File Ca390 in CA90</label>
                                                <span className="lastdate">Due Date: 20/08/2018 | </span>
                                                <span className="assignedby">Assigned By: Josh</span>
                                            </li>


                                            <li>
                                                <label className="taskname">Mail to admin for Documents</label>
                                                <span className="lastdate">Due Date: 20/08/2018 | </span>
                                                <span className="assignedby">Assigned By: Admin</span>
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="panelinfos">
                                        <span className="infopaneltile">
                                            Pending Deals
                                        </span>
                                        <ul className="panelist">



                                            <li>
                                                <label className="taskname">Mail to admin for Documents</label>
                                                <span className="lastdate">Due Date: 20/08/2018 | </span>
                                                <span className="assignedby">Assigned By: Admin</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </TabContainer>}
                    {value === 1 && <TabContainer>Item Two</TabContainer>}
                    {value === 2 && <TabContainer>Item Three</TabContainer>}
                </div>
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);