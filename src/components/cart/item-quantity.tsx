import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/cart"
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
    cartItem: Cart;
}
export const CartItemQuantity = ({ cartItem }: Props) => {
    const { upsertCartItem } = useCartStore(state =>state);

    const hadlePlusButton = () => {
        upsertCartItem(cartItem.product, 1);
    }
    const hadleMinusButton = () => {
        upsertCartItem(cartItem.product, -1);
    }

    return (
        <div className="flex items-center gap-2">
            <Button 
                onClick={hadlePlusButton}
                className="size-6" 
                variant="outline" 
                size="icon" 
            >
                <PlusIcon className="size-3"/>
            </Button>
            <div className="text-xs">{cartItem.quantity}</div>
            <Button 
                onClick={hadleMinusButton}
                className="size-6"
                variant="outline"
                size="icon"
            >
                <MinusIcon className="size-3"/>
            </Button>
        </div>
    )
}