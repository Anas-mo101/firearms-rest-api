import UserInfo from "./UserInfo.js";
import Header from '../Header/Header.js'
import Footer from "../Components/Footer.js";
import Navbar from "./Navbar.js";


export default class extends Anmo.AbstractView {
    constructor() {
        super({
            style: { height: '100%' }
        });
        this.setTitle("User Profile");
    }

    getComponentHTML() {

        try {
            // navbar
            this.appendHTMLComponent(new Header(new Navbar()).getComponentHTML());

            // banner
            this.appendHTMLComponent(new UserInfo().getComponentHTML());

            // breifing
            this.appendHTMLComponent(new Footer().getComponentHTML());

        } catch (error) {
            console.log(error)
            return this.componentError(error);
        }
        return this.getComponent_();
    }
}