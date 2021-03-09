import * as React from 'react';
import {memo, useRef} from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import {useRouter} from "next/router";

/**
 * Список роутов (SSR-страниц), которые могут быть закэшированы.
 * Все страницы кэшировать не надо, а нужно делать это осознанно
 * Для кэширования определенной страницы необходимо просто добавить сюда нужный роут
 */
const ROUTES_CAN_BE_CACHED: Array<string> = ['/Page1', '/Page2', '/Page3'];

export default function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();

    const retainedComponents = useRef<Array<{ key: string; component: JSX.Element }> | undefined>(undefined);
    const isRouteCouldBeCached = ROUTES_CAN_BE_CACHED.includes(router.asPath);

    /**
     * Функция кэширования страниц
     * ---------------------------
     * Проверка необходимо ли закэшировать страницу
     * Для этого при смене роута он проверяется возможность кэширования
     */
    if (isRouteCouldBeCached) {
        // Проверка была ли ранее закэширована страница с таким роутом
        const isPageAlreadyCached: boolean = Array.isArray(retainedComponents.current)
            ? retainedComponents.current.some((i) => i.key === router.asPath)
            : false;
        // Если такой страницы нет в кэше, то добавляем её
        if (!isPageAlreadyCached) {
            // Мемоизированный компонент
            const MemoComponent = memo(Component);
            const newCachedObject = {
                key: router.asPath,
                component: (
                    <MemoComponent {...pageProps}/>
                ),
            };
            // Либо создаем новый массив с кэшированными страницами, либо добавляем в существующий
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
                <title>My page</title>
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
                    <Component
                        {...pageProps}

                    />
                )}
            </ThemeProvider>
        </>
    );
}
