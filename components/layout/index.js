import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="relative">
            <div className="fixed inset-x-0 top-0 h-16 px-20 text-lg underline text-sky-700 bg-white z-10 border border-b shadow-md flex gap-4 items-center">
                <Link href="/">Home</Link>
                <Link href="/traditional-posts">Traditional Posts</Link>
                <Link href="/react-query-posts">React Query Posts</Link>
            </div>
            <div className="p-20">
                {children}
            </div>
        </div>
    )
}
