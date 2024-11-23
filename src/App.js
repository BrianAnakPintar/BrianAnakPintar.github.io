import './App.css';
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import { MantineProvider } from '@mantine/core';
import Blogs from "./components/Blogs";
import AboutPage from './components/about';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

function App() {
  return (
      <MantineProvider defaultColorScheme="dark">
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
