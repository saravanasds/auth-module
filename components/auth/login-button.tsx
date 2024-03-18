"use Client";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    const onClick = () => {
        console.log("Login Button Clicked");
    }

    return (
        <span className="cursor-pointer">
            {children}
        </span>

    );
};

