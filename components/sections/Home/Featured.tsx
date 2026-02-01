import FoodCard from "@/components/ui/Custom/FoodCard";
import Link from "next/link";

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

export default async function Featured() {
    const res = await fetch(`${process.env.SERVER}/food/all?limit=6`, {
        cache: "no-store",
    });
    const result = await res.json()
    const { foods }: { foods: Food[] } = result;
    return (
        <section className="flex flex-col items-center justify-center gap-2 my-20">
            <div className="space-y-3 text-center w-11/12 mx-auto">
                <h3 className="text-4xl font-bold">Popular Dishes</h3>
                <p>Explore our popular dishes that are known for delicious teste and extra-ordinary qualities</p>
            </div>
            <div className="w-11/12 mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center-safe">
                {
                    foods?.map(e => <FoodCard key={e._id} food={e} />)
                }
            </div>
            <div className="w-fit mx-auto">
            <Link href="/menu" className="btn btn-primary trns rounded-lg">Show All</Link>
            </div>
        </section>
    )
}