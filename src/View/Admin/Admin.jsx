import {BarChart} from './BarChart';
import {PieChart} from './PieChart';
import {Paper, Box} from '@mui/material';

function Admin() {
    return (
        <Box sx={{display:'flex', backgroundColor:'#202124'}}>
            <Paper sx={{backgroundColor: '#E4E4E4', display: 'inline-block', margin: '0 auto'}}>
            <BarChart/>
            <PieChart/>
            </Paper>
        </Box>
    );
}
export default Admin;