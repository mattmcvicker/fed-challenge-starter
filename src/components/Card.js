import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Timer } from '@material-ui/icons';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 275,
    },
    thumb: {
        height: 0,
        paddingTop: '56.25%',
    },
    icon: {
        width: 29,
        height: 27,
        borderRadius: 2
    },
    cardBottomContainer: {
        display: "flex",
        flexDirection: "row",
        textAlign: "start",
        width: 250
    },
    cardTitle: {
        alignSelf: "flex-start",
        width: "220px"
    },
    details: {
        display: "flex",
        paddingTop: 5,
        paddingBottom: 10
    },
    timeDistance: {
        paddingRight: 5
    },
    viewDetails: {
        textAlign: "start"
    }

}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.thumb}
                image={props.thumbSrc}
                title="thumbPic"
            />
            <CardContent>
                <div className={classes.cardBottomContainer}>
                    <Typography
                        className={classes.cardTitle}
                        gutterBottom variant="h8"
                        component="h4">
                        {props.cardTitle}
                    </Typography>
                    <CardMedia
                        className={classes.icon}
                        image={props.trainerIcon}
                        title="iconPic"
                    >
                    </CardMedia>
                </div>
                {props.time
                    ?
                    <div className={classes.details}>
                        <Timer style={{ fontSize: 20, color: "#7f7f7f", paddingRight: 3 }}></Timer>
                        <div className={classes.timeDistance}>{props.time}</div>
                        <DirectionsRunIcon style={{ fontSize: 20, color: "#7f7f7f", paddingRight: 3 }}></DirectionsRunIcon>
                        <div className={classes.timeDistance}>{props.meters}</div>
                    </div> : <></>
                }
                <div className={classes.viewDetails}>
                    {props.viewDetails
                        ? <div style={{ fontWeight: "bold", color: "#2585E2" }}>VIEW DETAILS</div>
                        : <></>
                    }
                </div>
            </CardContent>
        </Card>
    );
}
