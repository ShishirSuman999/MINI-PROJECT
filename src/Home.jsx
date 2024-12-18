import React from 'react';
import Navbar from './Navbar';
import CoursesCard from './CoursesCard';
import Footer from './Footer';
import './Home.css'; // Create this CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="content">
                <CoursesCard />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
