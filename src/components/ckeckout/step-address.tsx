import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
    street: z.string().min(2, 'Preencha o endereço'),
    number: z.string().min(2, 'Preencha o número'),
    complement: z.string().optional(),
    district: z.string().min(2, 'Preencha o bairro'),
    city: z.string().min(2, 'Preencha a cidade'),
    state: z.string().min(2, 'Preencha o estado'),
});

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}
export const StepAddress = ({ setStep }: Props) => {
    const { address, setAddress } = useCheckoutStore(state => state);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { ...address }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setAddress(values);
        setStep('finish');
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="street"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rua</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Número</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="complement"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Complemento</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="district"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bairro</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cidade</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />     
                </div>
                <div className="flex justify-between mt-4">
                    <Button variant='link' onClick={() => setStep('user')}>Voltar</Button>
                    <Button onClick={() => setStep('finish')}>Concluir</Button>    
                </div>
        </form>
    </Form>
    );
}