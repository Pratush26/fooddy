import FoodCard from "@/components/ui/Custom/FoodCard";

interface Category{
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
    const res = await fetch(`${process.env.SERVER}/food/all`);
    const result = await res.json()
    const {foods}: {foods : Food[]} = result;
    console.log(foods)
    return (
        <main>
            <section className="w-11/12 mx-auto my-8 grid grid-cols-4 gap-4 place-content-center-safe">
                {
                    foods?.map(e => <FoodCard key={e._id} food={e} />)
                }
            </section>
        </main>
    )
}