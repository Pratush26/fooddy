// components/FoodCard.tsx
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "../skeleton";

export default function FoodCardLoader() {

  return (
    <Card className="overflow-hidden">
      <Skeleton className="w-11/12 aspect-video rounded-2xl mx-auto" />
      <CardHeader className="space-y-2">
        <Skeleton className="h-4 w-full" />
          <Skeleton className="h-3 w-1/3 rounded-full" />

      </CardHeader>

      <CardContent className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex items-center gap-2 justify-between">
          <Skeleton className="h-2 w-2/3" />
          <Skeleton className="h-2 w-1/3" />
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 items-center justify-between">
        <Skeleton className="h-8 rounded-lg w-full" />
        <Skeleton className="h-8 rounded-lg w-full" />
      </CardFooter>
    </Card>
  );
}