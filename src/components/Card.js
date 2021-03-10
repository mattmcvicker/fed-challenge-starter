import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 270,
    },
    thumb: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    icon: {
        width: 42,
        height: 32
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    cardBottomContainer: {
        display: "flex",
        flexDirection: "row",
        textAlign: "start",
    },
    cardTitle: {
        alignSelf: "flex-start"
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
            </CardContent>
        </Card>
    );
}
