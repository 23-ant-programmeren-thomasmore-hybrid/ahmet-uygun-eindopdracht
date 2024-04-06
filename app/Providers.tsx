import React from 'react';
import {ThemeProvider} from "next-themes";
import dynamic from "next/dynamic";

function Providers({children} : {children:React.ReactNode;}) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
    );
}

export default Providers;