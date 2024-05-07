import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeComponent = ({ codeString }) => {

    const [lenguaje, setLenguaje] = useState(false);

    const isShowing = () => {
        setLenguaje(true)
    }

    const isLeaving = () => {
        setLenguaje(false)
    }

    return (
        <div
            className='relative'
            onMouseEnter={isShowing}
            onMouseLeave={isLeaving}
        >
            <SyntaxHighlighter language='javascript' style={atomOneDark}>
                {codeString}
            </SyntaxHighlighter>
            {lenguaje && (
                <div
                    className='cursor-pointer absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 text-white'>
                    JavaScript
                </div>
            )}
        </div>
    );
};

export { CodeComponent };

