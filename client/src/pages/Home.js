import React from 'react';
import List from '../components/List';
import Search from '../components/Search'


const Home = ({
    props
}) => {

    return (
        <>
            <h1> 
                <Search/>
                <List/>
            </h1>
        </>
    )
}

export default Home