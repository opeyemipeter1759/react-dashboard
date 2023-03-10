import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Topbar from './pages/Global/Topbar'
import Dashboard from './pages/Dashboard/Dashboard';
import Team from './pages/Team/Team';
import Invoices from './pages/Invoices/Invoices';
import Contacts from './pages/Contacts/Contacts';
import Bar from './pages/Bar/Bar.js';
import Form from './pages/Form/Form';
import Line from './pages/Line/Line';
import Pie from './pages/Pie/Pie';
import FAQ from './pages/FAQ/FAQ';
import Geography from './pages/Geography/Geography';
import Calendar from './pages/Calendar/Calendar';
import Sidebar from './pages/Global/Sidebar'

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
              <div className='app'>
                  <Sidebar/>
                  <main className='content'>
                      <Topbar /> 
                      <Routes>
                          <Route path='/' exact element={<Dashboard />} />
                          <Route path='/team' element={<Team />} />
                          <Route path='/contacts' element={<Contacts />} />
                          <Route path='/invoices' element={<Invoices />} />
                          <Route path='/Bar' element={<Bar />} />
                          <Route path='/form' element={<Form />} />
                          <Route path='/line' element={<Line />} />
                          <Route path='/pie' element={<Pie />} />
                          <Route path='/faq' element={<FAQ />} />
                          <Route path='/geography' element={<Geography />} />
                          <Route path='calendar' element={<Calendar />} />
                      </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
