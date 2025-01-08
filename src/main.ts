import './app.css'
import App from './App.svelte'

const path = window.location.pathname;

const app = new App({
  target: document.getElementById('app')!,
  props: {
    url: path
  }
})

export default app
