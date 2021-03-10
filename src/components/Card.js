import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Timer } from '@material-ui/icons';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 275,
        height: 285
    },
    thumb: {
        height: 0,
        paddingTop: '56.25%',
        zIndex: -1
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
        paddingRight: 5,
        fontSize: 10,
        color: "#000000",
        fontWeight: "bold"
    },
    viewDetails: {
        textAlign: "start"
    },
    overlay: {
        zIndex: 1,
        float: "right",
        color: "white",
        background: "rgba(18, 18, 134, 0.3)",
        height: "155px",
        width: "110px",
    }

}));

export default function ExerciseCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div>
                {props.workouts
                    ? <div className={classes.overlay}>
                        <div style={{ fontWeight: "bold", paddingTop: "25px" }}>{props.workouts}</div>
                        <div style={{ fontSize: 10, paddingTop: "7.5px" }}>WORKOUTS</div>
                        <MenuIcon style={{ paddingTop: "7.5px" }}></MenuIcon>
                    </div>
                    : <></>
                }
                <CardMedia
                    className={classes.thumb}
                    image={props.thumbSrc}
                    title="thumbPic"
                />
            </div>
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
                        <Timer style={{ fontSize: 15, color: "#7f7f7f", paddingRight: 3 }}></Timer>
                        <div className={classes.timeDistance}>{props.time}</div>
                        <DirectionsRunIcon style={{ fontSize: 15, color: "#7f7f7f", paddingRight: 3 }}></DirectionsRunIcon>
                        <div className={classes.timeDistance}>{props.meters}</div>
                    </div> : <></>
                }
                <div className={classes.viewDetails}>
                    {props.viewDetails
                        ? <div style={{ fontWeight: "bold", color: "#2585E2", fontSize: 12.5 }}>VIEW DETAILS</div>
                        : <></>
                    }
                </div>
            </CardContent>
        </Card>
    );
}
