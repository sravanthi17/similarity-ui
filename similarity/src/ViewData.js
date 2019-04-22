import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";
import sortData from "./reducers/similarity.reducer";

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

class ViewData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillUpdate(nextProps, nextState) {
       console.log("update")
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps);
    }

    render() {
        console.log("here");
        const {classes} = this.props;
        const headers = this.props.sortedData && this.props.sortedData.duplicates && Object.keys(this.props.sortedData.duplicates[0]);
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {headers && headers.length > 0 && headers.map(header => (
                                <TableCell>
                                    {header}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.sortedData && this.props.sortedData.duplicates && this.props.sortedData.duplicates.map(row => (
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

function mapStateToProps(state) {
    return {
        sortedData: state.sortData,
    }
}

export default withRouter(connect(mapStateToProps, {
})(withStyles(styles)(ViewData)));

