
import classes from './Header.module.css';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className={classes.headerlogo}>
            <div className={classes.main}>
                <img className={classes.logo}src="/img/Logo.svg" alt="Logo" />
                <div className={classes.menu}>
                    {/* <p className={classes.first}>Main</p> */}
                    <Link className={`${classes.first} ${classes.p}`} to="https://youtu.be/dQw4w9WgXcQ?si=W_Cjg0mT74XhU1CV">Main</Link>
                    <p className={classes.select}>Products</p>
                    <Link className={`${classes.p}`} to="https://youtu.be/dQw4w9WgXcQ?si=W_Cjg0mT74XhU1CV">Contacts</Link>
                    <Link className={`${classes.p}`} to="https://youtu.be/dQw4w9WgXcQ?si=W_Cjg0mT74XhU1CV">About us</Link>

                </div>
            </div>
            <div className={classes.cart}>
                <p className={classes.price}>1500₽</p>
                <img src="/img/Cart.svg" alt="" />
            </div>
        </div>
    );
};

export default Header;