import { Spinner } from "@/components/ui/spinner";

export default function loading() {
    return (
        <main className="flex items-center justify-center min-h-[80vh] w-full">
            <Spinner className="size-6" />
        </main>
    )
}