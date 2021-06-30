import React from 'react'

export default function user(props) {
     const {data} = props;
    return (
        <div>
            <h1>user component</h1>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </div>
    )
}
