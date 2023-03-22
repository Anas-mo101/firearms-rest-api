import registerDialog from "./registerDialog.js";
import notification from "./notification.js";

const baseurl = "http://localhost:3000";

export default class extends Anmo.AbstractView { 
    constructor() {
        super();

        this.loading = false;
        this.emailID = Anmo.AbstractView.generateID();
        this.passID = Anmo.AbstractView.generateID();
    }

    getFormVals(){
        const email = document.getElementById(this.emailID).value.trim();
        const password = document.getElementById(this.passID).value.trim();

        if(email == ''){
            notification.displaynotification('username cant be empty');
            return false;
        }

        if(password.length < 8){
            notification.displaynotification('password needs to be more that 8 characters');
            return false;
        }

        return {
            email,
            password
        }
    }

    async login(){
        try {
            this.loading = true;
            this.update();

            const params = this.getFormVals();

            if(!params) return;

            const formBody = Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');
    
            const url = new URL(`${baseurl}/api/login`);
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
                body: formBody
            }).then(res => res.json());

            Anmo.Router.navigateTo(`/user`);
        } catch (error) {
            console.log(error);
        }

        this.loading = false;
        this.update();
    }



    getComponentHTML() {
        try {
            return Anmo.BuildElement ({
                tag: 'form',
                attributes: [
                    { attribute: 'class', value: ['flex flex-col justify-center items-center'] }
                ],
                content: [
                    Anmo.BuildElement ({
                        tag: 'h1',
                        attributes: [
                            { attribute: 'class', value: ['m-2 text-center'] }
                        ],
                        content: 'Login'
                    }),
                    Anmo.BuildElement ({
                        tag: 'input',
                        id: this.emailID,
                        attributes: [
                            { attribute: 'class', value: ['pt-2 my-2 pb-2.5 px-5', 'text-base', 'font-medium','text-center','text-gray-900','rounded-lg','border','border-gray-300'] },
                            { attribute: 'type', value: 'email' },
                            { attribute: 'placeholder', value: 'email' },
                        ],
                    }),
                    Anmo.BuildElement ({
                        tag: 'input',
                        id: this.passID,
                        attributes: [
                            { attribute: 'class', value: ['pt-2 my-2 pb-2.5 px-5', 'text-base', 'font-medium','text-center','text-gray-900','rounded-lg','border','border-gray-300'] },
                            { attribute: 'type', value: 'text' },
                            { attribute: 'placeholder', value: 'password' },
                        ],
                    }),
                    Anmo.BuildElement ({
                        tag: 'button',
                        attributes: [
                            {
                                attribute: 'class',
                                value: [ 'cursor-pointer', 'pt-2 my-2 pb-2.5 px-5 w-full', 'text-base', 'font-medium','text-center','text-gray-900','rounded-lg','border','border-gray-300'] 
                            },
                            { attribute: 'type', value: 'button' },
                        ],
                        onTap: () => this.login(),
                        content: 'Login'
                    }),
                    Anmo.BuildElement ({
                        tag: 'h1',
                        attributes: [
                            { attribute: 'class', value: ['m-2 text-center'] }
                        ],
                        content: 'or'
                    }),
                    Anmo.BuildElement ({
                        tag: 'button',
                        attributes: [
                            {
                                attribute: 'class',
                                value: [ 'cursor-pointer', 'pt-2 my-2 pb-2.5 px-5 w-full', 'text-base', 'font-medium','text-center','text-gray-900','rounded-lg','border','border-gray-300'] 
                            },
                            { attribute: 'type', value: 'button' },
                        ],
                        onTap: () => {
                            this.popupInc = new Anmo.Utils.PopupIncubator();

                            const popup = Anmo.BuildElement ({
                                tag: 'div',
                                attributes: [
                                    { attribute: 'class', value: ['w-3/4 lg:w-1/4 h-2/3 bg-white rounded-lg flex flex-col justify-center items-center'] }
                                ],
                                content: [
                                    new registerDialog().getComponentHTML(),
                                    Anmo.BuildElement ({
                                        tag: 'button',
                                        attributes: [
                                            {
                                                attribute: 'class',
                                                value: ['absolute top-1 left-3'] 
                                            }
                                        ],
                                        onTap: () => this.popupInc.hidePopup(),
                                        content: 'x'
                                    })
                                ]
                            });
                    
                            this.popupInc.displayPopup(popup);
                        },
                        content: 'Register'
                    })
                ]
            })

        } catch (error) {
            console.log(error)
            return this.componentError(error);
        }
    }
}