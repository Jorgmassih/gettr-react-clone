import { Button, Divider, makeStyles, Icon } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles(theme=>({
    container: {
       gap: "3%",
       display: "flex",
       flexDirection: "column",
       height:"100%",
    },
    roundedButton: {
        borderRadius: 100,
        height: 46,
        textTransform: "none",
    },
    createPostButton: {
        background: '#CC0000',
        color: "white",
        width: 211,
    },
    homeButton: {
        // color: '#CC0000 !important',
    },
    navButton: {
        fontSize: '1.2em',
        fontWeight: 700,
        minWidth: 211*.7,
        justifyContent: "right",
        paddingRight:25,
        color: '#6e7187',
    },
    
}))

export default function NavMenu(props){

    const onClickHandler = (e)=> console.log(e.target.value)
    
    const navIconButton ={
        fontSize: '1.6em',
        marginRight: 7,
        marginLeft: 10,
    }
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div style={{marginTop: 45, marginBottom: 15}}>
                <Button size={'large'} startIcon={<Icon>edit</Icon>} className={`${classes.createPostButton} ${classes.roundedButton}`}>Create Post</Button>
            </div>
            <div>
                <Divider style={{ width: "60%" }} />
            </div>
            <div >
                <Button onClick={onClickHandler} value={'home'} style={{}} size={'large'} startIcon={<Icon style={navIconButton}>home</Icon>} className={`${classes.roundedButton} ${classes.homeButton} ${classes.navButton}`}>Home</Button>
            </div>
            <div>
                <Button size={'large'} startIcon={<Icon style={navIconButton}>person</Icon>} className={`${classes.roundedButton} ${classes.navButton}`}>Profile</Button>
            </div>
            <div>
                <Divider style={{ width: "60%" }} />
            </div>
            <div>
                <Button size={'large'} startIcon={<Icon style={navIconButton}>settings</Icon>} className={`${classes.roundedButton} ${classes.navButton}`}>Settings</Button>
            </div>
            <div>
                <Button size={'large'} startIcon={<Icon style={navIconButton}>help</Icon>} className={`${classes.roundedButton} ${classes.navButton}`}>Help</Button>
            </div>
            <div>
                <Button size={'large'} startIcon={<Icon style={navIconButton}>get_app</Icon>} className={`${classes.roundedButton} ${classes.navButton}`}>Download</Button>
            </div>
        </div>
    )
}