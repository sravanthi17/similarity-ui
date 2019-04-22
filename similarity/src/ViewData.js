import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const styles = {
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class ViewData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.goToUpload = this.goToUpload.bind(this);
    }

    goToUpload(){
        this.props.history.push('/upload')
    }
    render() {
        const {classes} = this.props;
        const duplicates = this.props.sortedData && this.props.sortedData.duplicates || [];
        const nonDuplicates = this.props.sortedData && this.props.sortedData.nonDuplicates || [];
        return (
            <Paper>
                <Card className={classes.card}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Duplicates
                    </Typography>
                    <CardActionArea>
                        <CardContent>
                            {duplicates.length > 0 && duplicates.map(row => (
                                <div>
                                    {Object.values(row).join(",")}
                                </div>
                            ))
                            }
                        </CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            NonDuplicates
                        </Typography>
                        <CardContent>
                            {nonDuplicates.length > 0 && nonDuplicates.map(row => (
                                <div>
                                    {Object.values(row).join(",")}
                                </div>
                            ))
                            }
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={this.goToUpload} variant="contained" color="primary" size="small">
                            Back
                        </Button>
                    </CardActions>
                </Card>

            </Paper>
        );
    }

}

function mapStateToProps(state) {
    return {
        sortedData: state.sortData,
    }
}

export default withRouter(connect(mapStateToProps, {})(withStyles(styles)(ViewData)));

