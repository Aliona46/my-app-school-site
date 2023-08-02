import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Layout():JSX.Element{
    return(
        <>
        <header>
            <h1 style={{listStyleType:'none',marginLeft: "20px", padding:0}}>School site</h1>
            <NavBar />
        </header>


        <main>
            <Outlet />
        </main>


        <footer>
            <p style={{listStyleType:'none',marginLeft: "20px", padding:0}}>Good luck in studies!</p>
        </footer>
        </>
        
    )
}