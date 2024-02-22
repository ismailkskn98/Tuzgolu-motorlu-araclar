import ReactDOM from 'react-dom/client';
import { store } from './redux/app/store';
import { Provider } from 'react-redux';
import '@/assets/css/main.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
