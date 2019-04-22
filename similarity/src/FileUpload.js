import * as React from "react";
import FileField from "./FileField";
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Papa from 'papaparse';
import {withRouter} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import {fetchSortedData} from "./action";
import connect from "react-redux/es/connect/connect";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

class FileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            csvfile: undefined
        };
        this.handleFileChosen = this.handleFileChosen.bind(this);
        this.importCSV = this.importCSV.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    handleFileChosen = event => {
        this.setState({
            csvfile: event.target.files[0]
        });
    };

    importCSV = () => {
        const { csvfile } = this.state;
        Papa.parse(csvfile, {
            complete: this.updateData,
            header: true
        });
    };

    updateData(result) {
        var data = result.data;
        console.log(data);
        this.props.fetchSortedData(data, this.props)
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
            <Paper className={classes.root} elevation={1}>
            <Card className={classes.card}>
                <CardContent>
                    <FileField onChange={this.handleFileChosen} ></FileField>
                </CardContent>
                <CardActions>
                    <Button onClick={this.importCSV} variant="contained" color="primary" size="small">Upload</Button>
                </CardActions>
            </Card>

            </Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sortedData:state.sortedData,
    }
}

export default withRouter(connect(mapStateToProps, {
    fetchSortedData
})(withStyles(styles)(FileUpload)));
