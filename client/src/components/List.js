import React, {useState} from 'react';
// import getList from  '../utils/API'

const List = ({
    props
}) => {

    if (!props.results.length) (
        <>
        <p>
            No data => check API
        </p>
        <button
            onClick={props.getServerDetails()}
            > Retrieve server details</button>
        </>
    )

    return (
        <>
            <h4>
                This is the List component
            </h4>
            <button
            onClick={props.getServerDetails()}
            > Retrieve server details</button>
        </>
    )
}

export default List