import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root2'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
function render(props) {
    const { container } = props;
    root.render(<React.StrictMode><App /></React.StrictMode>);
}
// function render(props) {
//     const { container } = props;
//     root.render(<React.StrictMode><App /></React.StrictMode>, container ? container.querySelector('#root2') : document.querySelector('#root2'));
// }

function storeTest(props) {
    props.onGlobalStateChange((value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev), true);
    props.setGlobalState({
        ignore: props.name,
        user: {
            name: props.name,
        },
    });
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[react16] props from main framework', props);
    storeTest(props);
    render(props);
}

export async function unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root2') : document.querySelector('#root2'));
    // root.unmount(container ? container.querySelector('#root2') : document.querySelector('#root2'));
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
