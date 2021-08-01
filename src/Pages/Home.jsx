import {
    Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Headbar from '../Components/Headbar/Headbar'

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
    }
}))



export default function Home() {

    const classes = useStyles()

    return (
        <div>
            <Headbar className={classes.headbar}/>
            <div className={classes.body}></div>
        </div>
    )


}