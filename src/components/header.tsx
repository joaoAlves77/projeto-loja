import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme.toggle";
import { CartSideBar } from "@/components/cart/sidebar";

export const Header = () => {
    return(
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <Logo/>
            </div>
            <div className="flex items-center gap-3">
                <ThemeToggle />
                <CartSideBar/>
            </div>
        </header>
    );
}