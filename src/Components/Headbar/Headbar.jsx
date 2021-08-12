import { 
    Paper,
    TextField,
    Icon,
    InputAdornment 
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';

import { HeadbarUser } from '../User/User'


function SearchBar(props){


    return (
        <Autocomplete
            id="combo-box-demo"
            options={[]}
            freeSolo
            // getOptionLabel={(option) => option.title}
            style={props.style}
            renderInput={(params) => (
                <div style={{ display: "flex", }}>
                    <TextField
                        {...params}
                        placeholder={'Search'}
                        size={'small'}
                        variant="outlined"
                        InputProps={{
                            style: {borderRadius: 30, background: "#EEEFF3"},
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon style={{color: "#6e7187"}}>search</Icon>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>)}
        />

    )
}

export default function Headbar(props) {

    const elementsContainerStyle = {
        width:"82%",
        height:"100%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        alignItems:"center",
        justifyContent:"space-between"
    }

    return (
            <Paper square elevation={0} className={props.className}>
                <div style={elementsContainerStyle}>
                <div style={{paddingBottom: "0.5%", width:"22%", paddingLeft: "2%", boxSizing: 'border-box'}}>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/0/00/Gettr_logo.svg'} alt={'Logo'} />
                </div>
                <SearchBar style={{ width: "48%", borderColor: "red" }}/>
                <HeadbarUser style={{width: "30%"}}  username={'@jorgmassih'} displayName={'Jorge Massih'}/>
                </div>
            </Paper>
    )
}