import Nav from "./Nav";

export default function Header() {
return (
    <>
        <header>
                <a href="/">
                    <img
                        src={require("../assets/nav-logo.png")}
                        alt="Little Lemon logo"
                        className="nav-image">
                    </img>

                </a>

            <Nav />

        </header>
    </>
);

}