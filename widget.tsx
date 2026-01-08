import r2wc from '@r2wc/react-to-web-component';
import App from './App';
import './index.css';

// Convert the App component to a Web Component using r2wc
// shadow: "open" ensures styles are isolated
const WebComponent = r2wc(App, {
    shadow: "open",
    props: {
        staffData: "json"
    }
});

if (!customElements.get('protea-roster')) {
    customElements.define('protea-roster', WebComponent);
}

console.log('Protea Roster Widget script loaded and element defined.');
