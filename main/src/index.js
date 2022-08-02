// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('main-root'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';

function render() {
    ReactDOM.render(<App />, document.querySelector('#main-root'));
}

render({});

registerMicroApps([
    {
        name: 'micro-react-1', // app name registered
        entry: '//localhost:10100',
        container: "#container",
        activeRule: '/app-react'
    },
    {
        name: 'micro-react-2', // app name registered
        entry: '//localhost:10200',
        container: "#container",
        activeRule: '/app-react2'
    },
    {
        name: 'vue', // app name registered
        entry: '//localhost:10300',
        container: "#container",
        activeRule: '/app-vue'
    },
    // {
    //     name: 'static', // app name registered
    //     entry: '//localhost:10400',
    //     container: "#subApp",
    //     activeRule: '/static'
    // }
], {
    beforeLoad: app => {
        console.log('before load app.name=====>>>>>', app.name)
    },
    beforeMount: [
        app => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
        }
    ],
    afterMount: [
        app => {
            console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
        }
    ],
    afterUnmount: [
        app => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
        }
    ]
})

start()
