import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css'

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import MainMenu from './ui/MainMenu'

import CssBaseline from '@mui/material/CssBaseline'

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <MainMenu />
        <hr />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
