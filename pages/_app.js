import "@styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "@components/layout";

// const queryClient = new QueryClient();

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // cacheTime: 5000,
            // staleTime: 10000,
            refetchOnWindowFocus: true,
            refetchOnMount: true
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
