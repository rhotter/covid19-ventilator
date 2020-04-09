import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    textAlign: "center",
    margin: "dense",
  }
});

class FlexValueCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            viewForm: false
        }

        this.openModal = this.openModal.bind(this)
    }

    componentDidUpdate(prevProps) {
        this.state.value = this.props.value;
    }

    openModal(){
        this.props.onClickHandler(this.props.name, this.props.value, this.props.unit)
    }

    render() {
        const { classes } = this.props;
        return(
            <Card className = {classes.root}>
                <CardActionArea onClick={this.openModal}>            
                    <Typography variant="subtitle1">
                        {this.props.name}
                    </Typography>
                    <Typography variant={this.props.prominence}>
                        {this.state.value} 
                    </Typography>
                    <Typography variant="subtitle2">
                        {this.props.unit}
                    </Typography>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(useStyles)(FlexValueCard)