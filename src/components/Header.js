import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header() {
return (
    <header>
        <menu>
            <Link to="/">
                <img
                    src={require("../assets/nav-logo.png")}
                    alt="Little Lemon logo"
                    className="nav-image">
                </img>
            </Link>

        <Nav />
        </menu>

    </header>
);

}