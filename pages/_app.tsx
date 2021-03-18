import * as React from 'react';
import {memo, useRef} from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import {useRouter} from "next/router";
import UniversalLayout from "../components/UniversalLayout";
import StartupHint from "../components/StartupHint";

/**
 * List of routes (SSR pages) that can be cached.
 * All pages do not need to be cached, but you need to do it deliberately
 * To cache a specific page, you just need to add the desired route here
 */
const ROUTES_CAN_BE_CACHED: Array<string> = ['/Page1', '/Page2', '/Page3'];

export default function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();
    const [showStartupHint, setShowStartupHint] = React.useState<boolean>(true);
    const retainedComponents = useRef<Array<{ key: string; component: JSX.Element }> | undefined>(undefined);
    const isRouteCouldBeCached = ROUTES_CAN_BE_CACHED.includes(router.asPath);

    const handleChangeStartupHint = (): void => {
        setShowStartupHint((prevState: boolean) => !prevState);
    }

    /**
     * Page caching function
     * ---------------------------
     * Check if the page needs to be cached
     * To do this, when changing a route, it checks the possibility of caching
     */
    if (isRouteCouldBeCached) {
        // Checking whether a page with such a route has been previously cached
        const isPageAlreadyCached: boolean = Array.isArray(retainedComponents.current)
            ? retainedComponents.current.some((i) => i.key === router.asPath)
            : false;
        // If there is no such page in the cache, then add it
        if (!isPageAlreadyCached) {
            // Memoized component
            const MemoComponent = memo(Component);
            const newCachedObject = {
                key: router.asPath,
                component: (
                    <UniversalLayout>
                        <MemoComponent {...pageProps}/>
                    </UniversalLayout>
                ),
            };
            // Either we create a new array with cached pages, or add to the existing one
            switch (retainedComponents.current) {
                case undefined:
                    retainedComponents.current = new Array(newCachedObject);
                    break;
                default:
                    retainedComponents.current.push(newCachedObject);
                    break;
            }
        }
    }
    return (
        <>
            <Head>
                <title>React Memo State</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {retainedComponents.current?.map((item) => (
                    <div
                        key={item.key}
                        style={{
                            display: router.asPath === item.key ? 'block' : 'none',
                        }}
                    >
                        {item.component}
                    </div>
                ))}

                {!isRouteCouldBeCached && (
                    <UniversalLayout>
                        {showStartupHint ?
                            <StartupHint handleChangeStartupHint={handleChangeStartupHint}/> :
                            <Component
                                {...pageProps}

                            />
                        }
                    </UniversalLayout>
                )}
            </ThemeProvider>
        </>
    )
        ;
}
