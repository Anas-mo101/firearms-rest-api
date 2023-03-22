// import Navbar from "./Navbar.js";


export default class extends Anmo.AbstractView { 
    constructor(navbar) {
        super();

        this.navbar = navbar;
    }

    getComponentHTML() {
        try {
            return Anmo.BuildElement ({
                tag: 'section',
                attributes: [
                    {
                        attribute: 'class',
                        value: ['relative shadow-lg h-20 flex w-full justify-between bg-black items-center']  //absolute top-0 right-0
                    },
                ],
                style :{
                    'z-index': '5'
                },
                content: [
                    Anmo.BuildElement ({
                        tag: 'div',
                        id: 'logo',
                        attributes: [
                            { attribute: 'class', value: ['mx-5'] }
                        ],
                        content: Anmo.BuildElement ({
                            tag: 'a',
                            attributes: [
                                { attribute: 'href', value: '/' },
                                { attribute: 'data-link',},
                            ],
                            content: Anmo.BuildElement ({
                                tag: 'img',
                                style: {
                                    'max-width': Anmo.Utils.Responsiveness.setByScreen('100%','100%','70%'),
                                },
                                attributes: [
                                    { attribute: 'src', value: './media/logo.png' },
                                    { attribute: 'width', value: '150' },
                                    { attribute: 'height',  value: '30' },
                                ],
                            })
                        })
                    }),
                    this.navbar.getComponentHTML()
                ]
            });
        } catch (error) {
            console.log(error)
            return this.componentError(error);
        }
    }
}