import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footercontent}>
                <p>©All Rights Reserved 2024</p>
                <div className={classes.footermenu}>
                    <img src="/img/TgLogo.svg" alt="TG" />
                    <img src="/img/PhoneLogo.svg" alt="Phone" />
                    <img src="/img/WALogo.svg" alt="WA" />
                </div>
                <p>+7 (999) 999-99-99</p>
                <img className={classes.arrow} src="/img/ArrowUp.svg" alt="" />
            </div>
        </div>
    );
};

export default Footer;