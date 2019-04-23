import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Collapse from "@material-ui/core/es/Collapse/Collapse";

const styles = theme => ({
    root: {
        maxWidth: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,

    },
    header: {
        background: "#9af3d5"
    },
    body: {
        overflowY: 'scroll',
    }
});

class CustomTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes} = this.props;
        let data = this.props.data;
        const headers = data && data.length>0 && Object.keys(data[0]);
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead className={classes.header}>
                        <TableRow>
                            {headers && headers.length > 0 && headers.map(header => (
                                <TableCell>
                                    {header}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody className={classes.body}>
                        { data  && data.map(row => (
                            <TableRow key={row.id}>
                                {headers && headers.length > 0 && headers.map(header => (
                                    <TableCell>
                                        {row[header]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

}


export default (withStyles(styles)(CustomTable));

