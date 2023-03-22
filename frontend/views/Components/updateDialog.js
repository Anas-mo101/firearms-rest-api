import notification from "./notification.js";

const baseurl = "http://localhost:3000";

export default class extends Anmo.AbstractView { 
    constructor(username,userEmail) {
        super();

        this.loading = false;

        this.userEmail = userEmail;
        this.username = username;

        this.emailID = Anmo.AbstractView.generateID();
        this.usernameID = Anmo.AbstractView.generateID();
        this.passID = Anmo. AbstractView.generateID();
        this.confrimPassID = Anmo.AbstractView.generateID();
    }

    isValidEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Test the email against the regular expression
        return emailRegex.test(email);
    }

    getFormVals(){
        const email = document.getElementById(this.emailID).value.trim();
        const username = document.getElementById(this.usernameID).value.trim();
        const password = document.getElementById(this.passID).value.trim();
        const confrimPass = document.getElementById(this.confrimPassID).value.trim();

        if(!this.isValidEmail(email)){
            notification.displaynotification('enter a valid email');
            return false;
        }

        if(username == ''){
            notification.displaynotification('username cant be empty');
            return false;
        }

        if(password !== confrimPass){
            notification.displaynotification('password does not match');
            return false;
        }

        if(password.length < 8){
            notification.displaynotification('password needs to be more that 8 characters');
            return false;
        }

        return {
            email,
            username,
            // password,
        }
    }

    async updateUserInfo(){
        this.loading = true;
        this.update();

        const params = this.getFormVals();

        if(!params) return;

        const userID = 1;
        const userAuth = 1;

        const formBody = Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');

        const url = new URL(`${baseurl}/api/users/${userID}`);
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Authorization': `Bearer ${userAuth}`
            },
            body: formBody
        })
        .then(res => res.json())
        .catch(err => Anmo.Router.navigateTo(`/`));

        console.log(response);

        this.loading = false;
        this.update();
    }

    getComponentHTML() {
        try {
            return Anmo.BuildElement ({
                tag: 'form',
                id: this.id,
                attributes: [
                    { attribute: 'class', value: ['flex flex-col justify-center items-center'] }
                ],
                content: [
                    Anmo.BuildElement ({
                        tag: 'h1',
                        attributes: [
                            { attribute: 'class', value: ['m-2 text-center'] }
                        ],
                        content: 'Update Profile'
                    }),
                    Anmo.BuildElement ({
                        tag: 'input',
                        id: this.emailID,
                        attributes: [
                            { attribute: 'class', value: ['pt-2 my-2 pb-2.5 px-5', 'text-base', 'font-medium','text-center','text-gray-900','rounded-lg','border','border-gray-300'] },
                            { attribute: 'type', value: 'text' },
                            { attribute: 'placeholder', value: 'email' },
                            { attribute: 'readonly', value: 'true' },
                        ],
                    }),
                    Anmo.BuildElement ({
                        tag: 'input',
                        id: this.usernameID,
                        attributes: [
                            { attribute: 'class', value: ['pt-2 my-2 pb-2.5 px-5', 'text-base', 'font-medium','text-center','text-gray-900','rounded-lg','border','border-gray-300'] },
                            { attribute: 'type', value: 'text' },
                            { attribute: 'placeholder', value: 'username' },
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
                        tag: 'input',
                        id: this.confrimPassID,
                        attributes: [
                            { attribute: 'class', value: ['pt-2 my-2 pb-2.5 px-5', 'text-base', 'font-medium','text-center','text-gray-900','rounded-lg','border','border-gray-300'] },
                            { attribute: 'type', value: 'password' },
                            { attribute: 'placeholder', value: 'confrim password' },
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
                        onTap: () => this.updateUserInfo(),
                        content: 'Update'
                    }),
                ]
            })

        } catch (error) {
            console.log(error)
            return this.componentError(error);
        }
    }
}