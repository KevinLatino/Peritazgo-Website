import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeComponent = ({ codeString }) => {
    return (
        <>
                <SyntaxHighlighter language="javascript" style={atomOneDark}>
                    {codeString}
                </SyntaxHighlighter>
        </>
    )
}

export { CodeComponent }
