import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeComponent = ({ codeString }) => {

    return (
        <div className='flex justify-center items-center'>
            <SyntaxHighlighter language='javascript' style={atomOneDark}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export { CodeComponent };

