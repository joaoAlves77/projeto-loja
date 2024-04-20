"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "./item";
import { useState } from "react";
import { CheckoutDialog } from "@/components/ckeckout/dialog";
  
export const CartSideBar = () => {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const { cart } = useCartStore(state => state);

    let subtotal = 0;
    for(let item of cart) {
        subtotal += item.quantity * item.product.price;
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="w-30 relative">
                    <ShoppingCartIcon className="w-5 mr-2"/>
                    <p>Carrinho</p>
                    {cart.length > 0 &&
                        <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
                    }
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                <SheetDescription className="flex w-30">
                    <CheckCircleIcon className="w-5 mr-2 rounded-md fill-green-500"/>
                    Adicionado ao carrinho
                </SheetDescription>
                </SheetHeader>
                
                <div className="flex flex-col gap-5 my-3">
                    {cart.map(item => (
                        <CartItem key={item.product.id} item={item} />
                    ))}
                </div>

                <Separator className="my-4"/>

                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal:</div>
                    <div>R$ {subtotal.toFixed(2)}</div>
                </div>

                <Separator className="my-4"/>

                <div className="text-center">
                    <Button 
                        onClick={() => setCheckoutOpen(true) }
                        disabled={cart.length === 0}
                    >Finalizar Compra</Button>
                </div>

                <CheckoutDialog
                    open={checkoutOpen}
                    onOpenChange={setCheckoutOpen} 
                />
            </SheetContent>
        </Sheet>
    );
}