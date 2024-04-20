"use client"

import { Product } from "@/types/product"
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useCartStore } from "@/stores/cart-store";

type Props = {
    item: Product;
}
export const ProductItem = ({ item }: Props) => {
    const { toast } = useToast();
    const { upsertCartItem } = useCartStore(state => state);

    const hadleAddButton = () => {
        upsertCartItem(item, 1);
        toast({
            title: "Adicionado ao Carrinho",
            description: item.name,
            action: <ToastAction altText="fechar">Fechar</ToastAction>
          });
    }

    return (
        <div>
            <div className="rounded-md overflow-hidden">
                <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-50">
                    {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })} 
                </p>
                <Button variant="outline" onClick={hadleAddButton}>Adicionar</Button>
            </div>
        </div>
    )
}