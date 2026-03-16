import React from 'react'

interface Props {
    text: string
}

const Hashtag = ({text}: Props) => {
    return (
        <div id="hashtag">
            <p>{"#" + text}</p>
        </div>
    )
}

export default Hashtag;