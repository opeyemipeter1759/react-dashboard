import { Box } from "@mui/material"
import Header from '../../components/Header';

const Dashboard = () =>
{
    
    let myDate = new Date();
    let hrs = myDate.getHours();
    let greet;
    if (hrs < 12) greet = " Morning";
    else if (hrs >= 12 && hrs <= 17) greet = " Afternoon";
    else if (hrs >= 17 && hrs <= 24) greet = " Evening";
  return (
    <Box m='20px'>
      <Box display="flex" justifyContent="space-between" alignItems="center">
              <Header title='Dashboard' subtitle={`${greet} Alex, Welcome to your dashboard   `} />
            
      </Box>
    </Box>
  );
};

export default Dashboard;
