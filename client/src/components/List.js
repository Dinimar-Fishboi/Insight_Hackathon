import React, {useState} from 'react';
import getList from '../utils/API'

const List = ({
    props
}) => {

    const [results, setResults] = useState([]);

    const getServerDetails = (query) => {
        const response = await getList(query)
        setResults(response)
    }

    if (!results.length) (
        <>
        <p>
            No data => check API
        </p>
        </>
    )

    return (
        <>
            <h4>
                This is the List component
            </h4>
            <button
            onClick={getServerDetails}
            > Retrieve server details</button>
        </>
    )
}

export default List