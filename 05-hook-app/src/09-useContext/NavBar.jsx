import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <>
        {/* NO recarga la pag */}
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/login"> Login</Link>
        <span>||</span>
        {/* SI recarga la pag */}
        <a href="/"> Home</a>
        <a href="/about"> About</a>
        <a href="/login"> Login</a>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >useContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <NavLink className={({isActive}) => `nav-link  ${ isActive ? 'active' : ''} `} to="/" >
                        HomePage
                    </NavLink>

                    <NavLink className={({isActive}) => `nav-link  ${ isActive ? 'active' : ''} `} to="/login" >
                        Login
                    </NavLink>

                    <NavLink className={({isActive}) => `nav-link  ${ isActive ? 'active' : ''} `} to="/about" >
                        About
                    </NavLink>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    </>
  )
}
