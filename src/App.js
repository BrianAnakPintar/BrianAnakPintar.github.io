import './App.css';
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { MantineProvider } from '@mantine/core';
import Blogs from "./components/Blogs";

function App() {
  return (
      <MantineProvider theme={{ colorScheme: 'dark' }}>
          <div className="App">
              <Homepage/>
              <Navbar/>
              <Projects/>
              <Blogs/>
              <Contact/>
          </div>
      </MantineProvider>
  );
}

export default App;
