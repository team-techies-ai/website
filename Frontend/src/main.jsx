import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Blogs from './Blogs/blogs.jsx'
import Team from './team/team.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<Team />} />
      </Routes>
    </Router>
  </StrictMode>,
)
