"use client"
import { toast } from "sonner";

export default function AddToCartBtn({ title, id }: { title: string; id: string }) {
    const handleClick = () => {
        if (!id) {
            toast.error("Food not found!")
            return;
        }
        toast.success(`${title} successfully added to your cart`)
    }
    return (
        <button onClick={handleClick} className="btn btn-out trns rounded-lg">Add to Cart</button>
    )
}