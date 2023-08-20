import Link from "next/link";
import Button from 'react-bootstrap/Button';

function NavMenu() {
  return (
    <header>
      <nav>
        <Link href='/'><h1>MaxkyoTHo Market</h1></Link>
        <div className="navBar">
        <Button variant="light"><Link href='/'>Home</Link></Button>{' '}
        <Button variant="light"><Link href='/about'>About</Link></Button>{' '}
        <Button variant="light"><Link href='/products'>Products</Link></Button>{' '}
        </div>
      </nav>
    </header>
  );
}

export default NavMenu;