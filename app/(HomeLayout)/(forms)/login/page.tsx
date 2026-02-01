import LoginForm from "@/components/Forms/Login"
import Link from "next/link"

export default async function LoginPage() {
    return (
        <main className="my-10 w-full">
            <h1 className="text-4xl font-semibold text-center m-6">Login</h1>
            <section className="bg-muted flex flex-col w-11/12 sm:w-2/3 lg:w-1/3 mx-auto items-center gap-2 p-8 rounded-2xl">
                <LoginForm />
                <span className="text-xs font-semibold">Do not have an account? <Link href="/register" className="text-cyan-600 trns hover:text-cyan-700">Register</Link></span>
            </section>
        </main>
    )
}