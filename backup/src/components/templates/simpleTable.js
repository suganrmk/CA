import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Icon } from 'react-icons-kit'
import {edit , bookOpen} from 'react-icons-kit/feather/'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const data = [
    createData('john Smith', '+91-9898393847', 'john@mail.com', 'ENRP898294', '40893292829'),
    createData('Sthephn Rock', '+6-9898393237', 'Sthephn@mail.com', 'ENRP232294', '340893292829'),
    createData('Brock Lesner', '+91-9898393262', 'john@mail.com', 'ENRP232034', '640893292829'),
    createData('Joch McCoy', '+1-9898393305', 'Joch@mail.com', 'ENRP893429', '43408932928'),
    createData('GoldmanSac', '+7-9898393356', 'GoldmanSac@mail.com', 'ENRP898449', '39040893292'),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <div className="hysasTable">
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead className="tablehead">
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Email Address</TableCell>
                            <TableCell>PAN Numner</TableCell>
                            <TableCell>Adhar Number</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="tablebody">
                        {data.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                        {n.name}
                                    </TableCell>
                                    <TableCell>{n.calories}</TableCell>
                                    <TableCell>{n.fat}</TableCell>
                                    <TableCell>{n.carbs}</TableCell>
                                    <TableCell>{n.protein}</TableCell>
                                    <TableCell>
                                    <Icon className="tableicon" icon={edit} />
                                    <Icon className="tableicon" icon={bookOpen} />
                                    
                                    
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);