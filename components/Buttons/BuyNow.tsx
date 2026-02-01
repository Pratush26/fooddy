"use client"
import { toast } from "sonner";

export default function BuyNowBtn({ title, id }: { title: string; id: string }) {
    const handleClick = () => {
        if (!id) {
            toast.error("Food not found!")
            return;
        }
        toast.success(`successfully purchashed ${title}`)
    }
    return (
        <button onClick={handleClick} className="btn btn-primary trns rounded-lg">Buy Now</button>
    )
}