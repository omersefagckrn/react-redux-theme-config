import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

/* Redux imported */
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
