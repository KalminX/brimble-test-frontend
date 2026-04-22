import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div className="card">
      <h1>🚀 Deployment Successful!</h1>
      <p>This React app was built by <strong>Railpack</strong> and deployed via your <strong>Python Pipeline</strong>.</p>
      <p>Status: <span className="status">Online</span></p>
      <small>Port: {window.location.port}</small>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
