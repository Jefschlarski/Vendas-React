import App from './App.tsx';
import { GlobalProvider } from './shared/hooks/useGlobalContext.tsx';
import './main.css';
import ReactDOM from 'react-dom/client';
import { DataProvider } from './shared/hooks/useDataContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <GlobalProvider>
      <DataProvider>
        <App/>
      </DataProvider>
    </GlobalProvider>
);
