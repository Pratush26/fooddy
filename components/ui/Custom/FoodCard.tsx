// components/FoodCard.tsx
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type Food = {
  _id: string;
  category: string;
  createdAt: string;
  description: string;
  photo: string;
  price: number;
  stock: number;
  title: string;
  unit: string;
};

export default function FoodCard({ food }: { food: Food }) {

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-16/10 w-11/12 rounded-lg overflow-hidden mx-auto">
        <Image
          src={food.photo}
          alt={food.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 420px"
          priority={false}
        />
      </div>

      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="line-clamp-1 text-lg">{food.title}</CardTitle>
        </div>
          <Badge variant={"secondary"}>
            Category: {food.category}
          </Badge>

      </CardHeader>

      <CardContent className="space-y-3">
        <p className="line-clamp-2 text-sm text-muted-foreground">{food.description}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">৳{food.price}</span>
          <span>•</span>
          <span>per {food.unit}</span>
        </div>
        <Link href={`/food-details/${food._id}`} className="text-xs italic hover:underline trns" >View Details</Link>
      </CardFooter>
    </Card>
  );
}