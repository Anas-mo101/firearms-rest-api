import Banner from "./Banner.js";
import Header from '../Header/Header.js'
import Breifing from "./Breifing.js";
import Footer from "../Components/Footer.js";
import Navbar from "../Header/Navbar.js";


export default class extends Anmo.AbstractView {
    constructor() {
        super({
            style: { height: '100%' }
        });
        this.setTitle("Firearms - Home");
    }

    getComponentHTML() {

        try {
            // navbar
            this.appendHTMLComponent(new Header(new Navbar()).getComponentHTML());

            // banner
            this.appendHTMLComponent(new Banner().getComponentHTML());

            // breifing
            this.appendHTMLComponent(new Breifing().getComponentHTML());

            this.appendHTMLComponent(new Footer().getComponentHTML());

        } catch (error) {
            console.log(error)
            return this.componentError(error);
        }
        return this.getComponent_();
    }
}