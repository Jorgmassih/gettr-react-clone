import {
    Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Headbar from '../Components/Headbar/Headbar'
import NavMenu from '../Components/Nav/Nav';

const useStyles = makeStyles(theme=>({
    headbar: {
        width: '100vw',
        height: '8vh',
        background: theme.palette.background.paper,
        position: "sticky",
        borderBottom: "1px solid #E8E9EF",
        boxSizing: "border-box"
    },
    body: {
        width: "100vw",
        height: "92vh",
        background: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
    }
}))


function HomeLayout(props){

    const lauyoutStyle = {
        display: "Grid",
        gridTemplateColumns: "22% 48% 30%",
        gridTemplateRows: "1fr",
        width: "82%",
        height: "100%",
    }
    return (
        <div style={lauyoutStyle}>
            <div style={{height: "100%"}}>
                <NavMenu/>
            </div>
            <div style={{background: "blue"}}>Getts</div>
            <div style={{background: "green"}}>Gettr News</div>
        </div>
    )
}


export default function Home() {

    const classes = useStyles()

    return (
        <div>
            <Headbar className={classes.headbar}/>
            <div className={classes.body}>
                <HomeLayout/>
            </div>
        </div>
    )


}