import React, {useState} from 'react';
import List from '../components/List';
import Search from '../components/Search'
import API from '../utils/API';

const Home = ({
    props
}) => {

    const [results, setResults] = useState([]);

    const getServerDetails = (query) => {
        const response = API.apiSearch(query)
        setResults(response)

        console.log(results)
    }
    
    return (
        <>
            <h1> 
                <Search/>
                <List results={results} getServerDetails={getServerDetails}/>
            </h1>
        </>
    )
}

export default Home