function NavBar(){
     return(
        <>
        <nav className="navbar">
            <div className="header-logo">
             <a href="#">Irent</a>
            </div>
            
        <ul>
            <li><a href="#" className="home">Home</a></li>
            <li><a href="#" className="about">About</a></li>
            <li><a href="#" className="services">Services</a></li>
          
        </ul>
        <div className="btn">
        <button className="signIn">Sign In</button>
        <button className="signUp">Sign Up</button>
        </div>
        </nav>
      
        
        </>
     )

}


export default NavBar