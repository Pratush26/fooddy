import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Link from "next/link";

export default function notFound() {
    return (
        <main className="flex flex-col justify-between min-h-screen">
            <Navbar />
            <div className="flex gap-2 flex-col items-center justify-center min-h-[70vh] w-full">
                <h1 className="text-5xl font-bold animate-bounce">404</h1>
                <p>The page you are looking for is not found!</p>
                <Link href='/' className="btn btn-primary trns rounded-2xl">Go Back Home</Link>
            </div>
            <Footer />
        </main>
    )
}