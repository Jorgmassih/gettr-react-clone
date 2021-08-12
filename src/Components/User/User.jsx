import { Typography, Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",        
    },
    avatar: {
        marginLeft: "3%"
    }
}))


export function HeadbarUser(props){

    const { username, displayName } = props;
    const classes = useStyles()

    return (
        <div style={props.style} className={classes.container}>
            <div style={{textAlign: "right"}}>
                <Typography><b>{displayName}</b></Typography>
                <Typography style={{color: "#5C7192"}} variant={'body2'}>{username}</Typography>
            </div>
            <div className={classes.avatar}>
                <Avatar/>
            </div>
        </div>
    )
}
