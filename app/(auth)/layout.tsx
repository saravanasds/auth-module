const AuthLayout = ({children}:any) => {
    return (
        <div>
            <nav className ="bg-red-500 text-white">
                This is Navbar without / Auth prefix
            </nav>
            {children}
        </div>
    );
}

export default AuthLayout