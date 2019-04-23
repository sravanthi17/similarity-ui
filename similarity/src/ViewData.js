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
import CustomTable from "./CustomTable";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = {
    card: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        paddingTop:10,
    },
    pos: {
        marginBottom: 12,
    },
};

class ViewData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.goToUpload = this.goToUpload.bind(this);
    }

    goToUpload(){
        this.props.history.push('/upload')
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const {classes} = this.props;
        const duplicates = this.props.sortedData && this.props.sortedData.duplicates || [];
        const nonDuplicates = this.props.sortedData && this.props.sortedData.nonDuplicates || [];
        return (
            <Paper>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab label="Duplicates" />
                        <Tab label="NonDuplicates" />
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && <CustomTable data={duplicates}></CustomTable>}
                {this.state.value === 1 && <CustomTable data={nonDuplicates}></CustomTable>}
                {/*<Card className={classes.card}>*/}
                    {/*<CardActions>*/}
                        {/*<Button onClick={this.goToUpload} variant="contained" color="primary" size="small">*/}
                            {/*Back*/}
                        {/*</Button>*/}
                    {/*</CardActions>*/}
                    {/*<Typography className={classes.title} color="secondary" gutterBottom component="h1">*/}
                        {/*Duplicates*/}
                    {/*</Typography>*/}
                    {/*<CustomTable data={duplicates}/>*/}

                    {/*<Typography className={classes.title} color="primary" gutterBottom component="h1">*/}
                        {/*Non Duplicates*/}
                    {/*</Typography>*/}
                    {/*<CustomTable data={nonDuplicates}/>*/}
                    {/*/!*<CardActionArea>*!/*/}
                        {/*/!*<CardContent>*!/*/}
                            {/*/!*{duplicates.length > 0 && duplicates.map(row => (*!/*/}
                                {/*/!*<div>*!/*/}
                                    {/*/!*{Object.values(row).join(",")}*!/*/}
                                {/*/!*</div>*!/*/}
                            {/*/!*))*!/*/}
                            {/*/!*}*!/*/}
                        {/*/!*</CardContent>*!/*/}
                        {/*/!*<Typography className={classes.title} color="textSecondary" gutterBottom>*!/*/}
                            {/*/!*NonDuplicates*!/*/}
                        {/*/!*</Typography>*!/*/}
                        {/*/!*<CardContent>*!/*/}
                            {/*/!*{nonDuplicates.length > 0 && nonDuplicates.map(row => (*!/*/}
                                {/*/!*<div>*!/*/}
                                    {/*/!*{Object.values(row).join(",")}*!/*/}
                                {/*/!*</div>*!/*/}
                            {/*/!*))*!/*/}
                            {/*/!*}*!/*/}
                        {/*/!*</CardContent>*!/*/}
                    {/*/!*</CardActionArea>*!/*/}

                {/*</Card>*/}
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

