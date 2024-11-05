import './App.css';
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import { MantineProvider } from '@mantine/core';
import Blogs from "./components/Blogs";
import AboutPage from './components/about';

function App() {
  return (
      <MantineProvider theme={{ colorScheme: 'dark' }}>
          <div className="App">
              <Homepage/>
              <Navbar/>
              <AboutPage/>
              <Projects/>
              <Blogs/>
              <Contact/>
          </div>
      </MantineProvider>
  );
}

export default App;
