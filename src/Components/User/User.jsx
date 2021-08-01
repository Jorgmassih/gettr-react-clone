import { Typography, Avatar } from "@material-ui/core";

export function HeadbarUser(props){

    const { username, displayName } = props;


    return (
        <div style={{display: "flex", justifyContent: "space-between", width: "12%"}}>
            <div style={{textAlign: "right"}}>
                <Typography><b>{displayName}</b></Typography>
                <Typography style={{color: "#5C7192"}} variant={'body2'}>{username}</Typography>
            </div>
            <div>
                <Avatar/>
            </div>
        </div>
    )
}
