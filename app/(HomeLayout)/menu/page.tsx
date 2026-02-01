import FoodCard from "@/components/ui/Custom/FoodCard";

interface Category {
    name: string
}
interface Food {
    _id: string;
    category: Category;
    createdAt: string;
    description: string;
    photo: string;
    price: number;
    stock: number;
    title: string;
    unit: string;
};

export default async function Menu() {
    const res = await fetch(`${process.env.SERVER}/food/all?limit=12`, {
        cache: "no-store",
    });
    const result = await res.json()
    const { foods }: { foods: Food[] } = result;
    return (
        <main>
            <h3 className="text-4xl text-center m-6 mt-10 font-bold">All Foods</h3>
            <section className="w-11/12 mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-content-center-safe">
                {
                    foods?.map(e => <FoodCard key={e._id} food={e} />)
                }
            </section>
        </main>
    )
}