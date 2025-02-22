import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', 'u', 's', 'h', 'k', 'o']
    const jobArray = ['s','o','f','t','w','a','r','e',' ', 'e','n','g','i','n','e','e','r', '.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
    }, []);
    
        return (
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt = "engineer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                    </h1>
                    <h2>Computer Science Student / C++ Expert</h2>
                    <Link to = "/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
                <Loader type="pacman" />
            </div>
        )

}

export default Home;