import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modal } from './components/modals/Modal';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      {!openModal &&
        <>
        <NavBar setOpenModal={setOpenModal} />
        <ToastContainer className="toastie" toastStyle={{
          backgroundColor: "#75563a",
          color: "#fcedda",
          toastifyColorProgressLight: "#747461"
        }} />
        <Banner />
        <br />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </>
      }
      {openModal &&
      <>
        <NavBar setOpenModal={setOpenModal} />
        <br />
        <Modal setOpenModal={setOpenModal} />
      </>
      }
    </div>
  );
}

export default App;
