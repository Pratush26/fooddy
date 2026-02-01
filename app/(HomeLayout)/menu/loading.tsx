import FoodCardLoader from "@/components/ui/Custom/FoodCardLoader";

export default function loading() {
    return (
        <main>
            <section className="w-11/12 mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-content-center-safe">
                {
                    Array.from({ length: 8 }).map((_, i) => <FoodCardLoader key={i} />)
                }
            </section>
        </main>
    )
}