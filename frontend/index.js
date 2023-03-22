import Frontpage from "./views/Frontpage/Frontpage.js";
import User from './views/Users/User.js'

Anmo.setBreakPoints({mobile: 450, tablet: 850});
Anmo.setMainContainer("body");

// Anmo.initApp(Frontpage);

Anmo.initApp([
    { path: "/", view: Frontpage},
    { path: "/user", view: User},
]);