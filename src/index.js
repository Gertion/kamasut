import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store"
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "./StoreContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireThree = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
                </Provider>
        </React.StrictMode>
    );
}

rerenderEntireThree()

store.subscribe(() => {
    rerenderEntireThree()
})

reportWebVitals();
