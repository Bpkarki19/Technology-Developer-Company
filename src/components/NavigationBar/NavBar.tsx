import "./nav.css";
import {Link, NavLink} from 'react-router-dom';

interface NavItems {
  text: string;
  path: string;
}

interface NavItemsProps{
  items:NavItems[];
}

function NavBar({items}: NavItemsProps) {
  const itemList = items.map((item, index) => (
    <li key={index}>
      <Link to={item.path}>{item.text}</Link>
      {/*<a href={item.path}>{item.text}</a>*/}
    </li>
  ));

  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-section">
            <img src="/images/logo.svg"></img>
          </div>
          <div className="identity">
            <h1>Technology Developer</h1>
            <p>We develop websites, apps, robots and IOT projects.</p>
          </div>
          <div className="logo-section">
            <img src="/images/logo.svg"></img>
          </div>
        </div>

        <nav className="navbar">
          <ul className="ul">{itemList}</ul>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
