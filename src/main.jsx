
import { hydrate } from 'preact-iso'
import { App } from './app.jsx'

if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('app'))
}

