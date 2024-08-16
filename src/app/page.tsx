import About from '@/components/About';
import Footer from '@/components/Footer';
import Know from '@/components/Know';
import Natan from '@/components/Natan';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';

function Home() {
    return (
        <>
            <NavBar />
            <Natan />
            <About />
            <Projects />
            <Know />
            <Footer />
        </>
    );
}

export default Home;