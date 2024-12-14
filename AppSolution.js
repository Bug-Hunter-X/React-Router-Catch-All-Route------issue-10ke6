```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Correct order of routes */}
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>; }
function About() { return <div>About</div>; }
function NotFound() { return <div>Not Found</div>; }
export default App;
```