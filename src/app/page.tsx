import About from '@/components/About';
import Footer from '@/components/Footer';
import Job from '@/components/Job';
import Know from '@/components/Know';
import Natan from '@/components/Natan';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import UpButton from '@/components/UpButton';

function Home() {
    return (
        <>
            <NavBar />
            <Natan />
            <About />
            <Job />
            <Projects />
            <Know />
            <Footer />
            <UpButton />
        </>
    );
}

export default Home;