import "@styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "@components/layout";

// const queryClient = new QueryClient();

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 60000,            // default: 300000 (5m)
            staleTime: 10000,            // default: 0
            refetchOnWindowFocus: true,  // default: true
            refetchOnMount: true,        // default: true
            refetchOnReconnect: true,    // default: true
            refetchInterval: 60000
        }
    }
});

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default MyApp
