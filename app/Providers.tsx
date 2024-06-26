"use client";

import React, {useEffect, useState} from 'react';
import {ThemeProvider} from "next-themes";

function Providers({children} : {children:React.ReactNode;}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
    );
}

export default Providers;