import Dashboard from "../screens/dashboard"
import Contact from "../screens/contactus"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
export default function(){
    const data=[
        {// ==============================|| DASHBOARD MENU ITEMS ||============================== //
            id:0,
            label:"Dashboard",
            img:<DashboardIcon/>,
            component:<Dashboard/>,
            path:"/dashboard"

        },
        {
            id:1,
            label:"Contact",
            img:<PhonePausedIcon/>,
            component:<Contact/>,
            path:"/contact"

        }
    ]
    return data
}

 //export default data