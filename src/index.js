import { createRoot } from 'react-dom/client';
import App from './App';
import './css/style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App tab="home" />);
