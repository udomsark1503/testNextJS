import NavMenu from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div>
            <NavMenu />
            {children}
            <Footer />
        </div>
    )
}
export default Layout;