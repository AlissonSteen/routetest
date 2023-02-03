import { Link, Outlet } from "react-router-dom"

function HomePage() {
    return (
        <>
            <h1>Agenda</h1>
            <form action="">
                <input type="text" />
                <input type="submit" />
            </form>

            <nav>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/calendar">Calendário</Link></li>
                    <li><Link to="/agenda">Agenda</Link></li>
                </ul>
            </nav>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default HomePage