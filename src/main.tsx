import { ThemeProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import THEME from './theme/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={THEME}>
    <App />
  </ThemeProvider>
)
