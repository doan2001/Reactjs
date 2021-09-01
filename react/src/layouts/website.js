import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LayoutWebsite = (props) => {
    return (
        <div>
            <Header {...props}/>
            <div>
                {props.children} 
            </div>
            <Footer {...props}/>
        </div>
    )
}

export default LayoutWebsite
