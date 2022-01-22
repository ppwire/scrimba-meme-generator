import Logo from '/images/troll-face.svg'
const Header = () => {
   return (
      <nav>
         <div className="nav-header">
            <img src={Logo} alt="" className="nav-logo"/>
            <h3>Meme Generator</h3>
         </div>
         <p>React Course Project</p>
      </nav>
   )
}

export default Header