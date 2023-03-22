// import updateDialog from "../Components/updateDialog.js";
import notification from "../Components/notification.js";

const baseurl = 'http://localhost:3000'

export default class extends Anmo.AbstractView { 
    constructor() {
        super();

        this.authKey = 'XXXX-XXXX-XXXX-XXXX';
        this.limitCount = 'XX';
        this.userType = 'XX';
        this.userEmail = 'XX';
        this.username = 'XX';

        this.isLoading = true;

        this.init();
    }

    async init(){
        try {
            const url = new URL(`${baseurl}/api/info`);
            const response = await fetch(url, { method: 'GET' }).then(res => res.json());

            this.authKey = response.authKey;
            this.limitCount = response.limitCount;
            this.userType = response.userType;
            this.userEmail = response.userEmail;
            this.username = response.username;
        } catch (error) {
            console.log(error);
            Anmo.Router.navigateTo(`/`);
            this.errorMessage = 'Initializing Error'
        }

        this.loading = false;
        this.update();
    }

    getPopup(){
        this.popupInc = new Anmo.Utils.PopupIncubator();

        const popup = Anmo.BuildElement ({
            tag: 'div',
            attributes: [
                { attribute: 'class', value: ['w-3/4 lg:w-1/4 bg-white rounded-lg flex flex-col justify-center items-center'] }
            ],
            content: [
                new updateDialog(this.userEmail,this.username).getComponentHTML(),
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

    }

    getPremiumPopup(){
        this.popupInc = new Anmo.Utils.PopupIncubator();

        const popup = Anmo.BuildElement ({
            tag: 'div',
            attributes: [
                { attribute: 'class', value: ['w-3/4 lg:w-1/4 h-1/4 bg-white rounded-lg flex flex-col justify-center items-center'] }
            ],
            content: [
                Anmo.BuildElement ({
                    tag: 'h2',
                    attributes: [
                        { attribute: 'class', value: ['text-lg text-black'] }
                    ],
                    content: 'Coming Soon'
                }),
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

    }

    getComponentHTML() {
        try {
            return Anmo.BuildElement ({
                tag: 'section',
                id: this.id,
                style: {
                    height: '85%',
                    position: 'relative',
                    'z-index': '1',
                    display: Anmo.Utils.Responsiveness.setByScreen('grid','block','block'),
                    'grid-template-columns': '1fr 4fr',
                },
                content: [
                    Anmo.BuildElement({
                        tag: 'div',
                        attributes: [
                            { attribute: 'class', value: ['flex flex-col items-center border-r-2 border-r-2 border-b-2 lg:border-r-2'] }
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'img',
                                style: {
                                    width: '100%'
                                },
                                attributes: [
                                    { attribute: 'src', value: './media/profile.png' },
                                    { attribute: 'width', value: '150' },
                                    { attribute: 'height',  value: '30' },
                                ],
                            }),
                            Anmo.BuildElement ({
                                tag: 'h2',
                                attributes: [
                                    { attribute: 'class', value: ['font-bold text-xl text-black'] }
                                ],
                                content: this.username
                            }),
                            Anmo.BuildElement ({
                                tag: 'h2',
                                attributes: [
                                    { attribute: 'class', value: ['text-lg text-black'] }
                                ],
                                content: ` - ${this.userType} teir -`,
                            }),
                            this.userType != 'free' ? null : Anmo.BuildElement({
                                tag: 'button',
                                onTap: () => this.getPremiumPopup(),
                                attributes: [
                                    {
                                        attribute: 'class',
                                        value: [ 
                                            'cursor-pointer w-2/3', 'justify-center', 'items-center','my-4 pt-2 pb-2.5 px-5', 'text-base', 
                                            'font-medium','text-center','text-black','border','border-gray-300',
                                        ]
                                    }
                                ],
                                content: 'Update to PREMUIM'
                            }),
                        ]
                    }),
                    Anmo.BuildElement({
                        tag: 'div',
                        attributes: [
                            { attribute: 'class', value: ['p-8'] }
                        ],
                        content: [
                            
                            Anmo.BuildElement({
                                tag: 'div',
                                attributes: [
                                    { attribute: 'class', value: ['flex gap-3 items-center'] }
                                ],
                                content: [
                                    Anmo.BuildElement ({
                                        tag: 'h2',
                                        attributes: [
                                            { attribute: 'class', value: ['text-lg text-black'] }
                                        ],
                                        content: 'Auth Key:'
                                    }),
                                    Anmo.BuildElement ({
                                        tag: 'dive',
                                        id: this.passID,
                                        attributes: [
                                            { attribute: 'class', value: ['pt-2 my-2 pb-2.5 px-5', 'text-base', 'font-medium','text-center','text-gray-900','rounded-lg','border','border-gray-300'] },
                                        ],
                                        content: this.authKey
                                    }),
                                    Anmo.BuildElement ({
                                        tag: 'button',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold my-auto px-2 py-1 border border-gray-300 text-gray-900 bg-gray-300 text-sm rounded-lg '] }
                                        ],
                                        onTap: async () => {
                                            try {
                                                await navigator.clipboard.writeText(this.authKey);
                                                notification.displaynotification('key copied')
                                            } catch (err) {
                                                console.error('Failed to copy: ', err);
                                            }
                                        },
                                        content: 'Copy'
                                    }),
                                ]
                            }),
                            Anmo.BuildElement({tag: 'br'}),
                            Anmo.BuildElement({
                                tag: 'div',
                                attributes: [
                                    { attribute: 'class', value: ['flex gap-3 justify-center lg:justify-start items-center'] }
                                ],
                                content: [
                                    Anmo.BuildElement ({
                                        tag: 'h2',
                                        attributes: [
                                            { attribute: 'class', value: ['text-lg text-black'] }
                                        ],
                                        content: `Monthly Limit: ${this.limitCount}/5000`
                                    }),
                                ]
                            }),

                        ]
                    }),
                ]
            });
        } catch (error) {
            console.log(error)
            return this.componentError(error);
        }
    }
}