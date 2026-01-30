import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

interface Category {
    name: string
}
interface Food {
    _id: string;
    category: Category;
    description: string;
    photo: string;
    price: number;
    stock: number;
    title: string;
    unit: string;
    createdAt: string;
    updatedAt: string;
};
export default async function FoodDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const res = await fetch(`${process.env.SERVER}/food/id/${id}`);
    const result = await res.json()
    const { food }: { food: Food } = result;
    const inStock = food.stock > 0;
    return (
        <main className="mx-auto w-11/12 my-10">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative w-full h-auto aspect-auto rounded-2xl overflow-hidden shadow-ring shadow-lg/20">
                    <Image
                        src={food.photo}
                        alt={food.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Details */}
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="font-normal">
                            {food.category?.name || "Uncategorized"}
                        </Badge>
                        <Badge variant={inStock ? "secondary" : "destructive"}>
                            {inStock ? `${food.stock} in stock` : "Out of stock"}
                        </Badge>
                    </div>

                    <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        {food.title}
                    </h1>

                    <div className="flex flex-wrap items-end gap-2">
                        <p className="text-3xl font-bold">৳{food.price}</p>
                        <p className="pb-1 text-sm text-muted-foreground">per {food.unit}</p>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {food.description}
                    </p>

                    <Separator />

                    <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                        <button
                            disabled={!inStock}
                            className="btn btn-out trns rounded-full w-full"
                        >
                            Add to cart
                        </button>
                        <button className="btn btn-primary trns rounded-full w-full">
                            Buy Now
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 pt-2 sm:flex-row items-center text-center">
                        <p className="text-xs text-muted-foreground">
                            Tip: If you want “Back to menu” to work, wrap it with a Next <code>Link</code> to your listing page.
                        </p>
                        <Link
                            href={"/menu"}
                            className="btn btn-out trns rounded-full"
                        >
                            Back To Main Menu
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}