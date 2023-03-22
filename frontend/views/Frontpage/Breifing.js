import CodeSnippet from "../Components/CodeSnippet.js";
import Counter from "../Components/Counter.js";
import ParamsTable from "../Components/ParamsTable.js";
import { responseExample } from "../../assets/responseExample.js";
import paramsDetails from "../../assets/paramsDetails.json" assert { type: "json" };
import registerDialog from "../Components/registerDialog.js";


export default class extends Anmo.AbstractView { 
    constructor() {
        super();
    }

    getPopup(){
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

    }

    getComponentHTML() {
        try {
            return Anmo.BuildElement ({
                tag: 'section',
                id: this.id,
                content: [
                    Anmo.BuildElement ({
                        tag: 'div',
                        attributes: [
                            { attribute: 'class', value: ['w-full my-7 px-6 lg:px-80 relative flex justify-center items-center']},
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'p',
                                attributes: [
                                    { attribute: 'class', value: ['font-bold text-center text-black'] }
                                ],
                                content: 'Your ultimate source for blazing-fast access to comprehensive firearm data! Whether you need to retrieve firearm details, search for specific models, or manage user accounts, our API has you covered. With top-notch security and reliable performance, our API is the perfect solution for firearm enthusiasts, law enforcement agencies, and businesses alike. Get your hands on our Firearms REST API today and hit the target every time!'
                            }),
                        ]
                    }),
                    new Counter().getComponentHTML(),
                    Anmo.BuildElement ({
                        tag: 'div',
                        attributes: [
                            { attribute: 'class', value: ['w-full my-7 relative flex justify-center items-center']},
                        ],
                        content: [
                            Anmo.BuildElement({
                                tag: 'button',
                                onTap: () => this.getPopup(),
                                attributes: [
                                    {
                                        attribute: 'class',
                                        value: [ 
                                            'cursor-pointer ', 'justify-center', 'items-center','pt-2 pb-2.5 px-5', 'text-base', 
                                            'font-medium','text-center','text-black','border','border-gray-300',
                                        ]
                                    }
                                ],
                                content: 'Get a Free API Key Now !'
                            }),
                        ]
                    }),
                    Anmo.BuildElement ({
                        tag: 'h1',
                        attributes: [
                            { attribute: 'class', value: ['text-center my-16 font-extrabold tracking-tight leading-none text-black text-4xl md:text-5xl lg:text-6xl'] },
                        ],
                        content: 'Documentation'
                    }),
                    Anmo.BuildElement ({
                        tag: 'div',
                        attributes: [
                            { attribute: 'class', value: ['flex my-8 px-10 py-4 flex-col gap-6 lg:gap-0 lg:flex-row justify-center'] },
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'div',
                                attributes: [
                                    { attribute: 'class', value: ['w-full text-left lg:w-1/2 lg:px-6 relative']},
                                ],
                                content: [
                                    Anmo.BuildElement ({
                                        tag: 'h2',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold text-xl text-black'] }
                                        ],
                                        content: 'Authentication'
                                    }),
                                    Anmo.BuildElement ({
                                        tag: 'p',
                                        attributes: [
                                            { attribute: 'class', value: ['text-black'] }
                                        ],
                                        content: 'Authenticate requests headers using Auth Key provided'
                                    }),
                                    Anmo.BuildElement({tag: 'br'}),
                                    Anmo.BuildElement({
                                        tag: 'p',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold text-black'] }
                                        ],
                                        content: 'Example: JavaScript - Fetch'
                                    }),
                                ]
                            }),
                            new CodeSnippet(responseExample(4)).getComponentHTML(),
                        ]
                    }),
                    Anmo.BuildElement ({
                        tag: 'div',
                        attributes: [
                            { attribute: 'class', value: ['flex my-8 px-10 py-4 flex-col gap-6 lg:gap-0 lg:flex-row justify-center'] },
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'div',
                                attributes: [
                                    { attribute: 'class', value: ['w-full text-left lg:w-1/2 lg:px-6 relative']},
                                ],
                                content: [
                                    Anmo.BuildElement ({
                                        tag: 'h2',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold text-xl text-black'] }
                                        ],
                                        content: 'Firearms'
                                    }),
                                    Anmo.BuildElement ({
                                        tag: 'p',
                                        attributes: [
                                            { attribute: 'class', value: ['text-black'] }
                                        ],
                                        content: 'Retreive list of Firearms'
                                    }),
                                    Anmo.BuildElement({tag: 'br'}),
                                    Anmo.BuildElement({
                                        tag: 'p',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold text-black'] }
                                        ],
                                        content: 'GET: /v1/api/firearms'
                                    }),
                                    Anmo.BuildElement({tag: 'br'}),
                                    new ParamsTable(paramsDetails['/v1/api/firearms']).getComponentHTML()
                                ]
                            }),
                            new CodeSnippet(responseExample(0)).getComponentHTML(),
                        ]
                    }),
                    Anmo.BuildElement ({
                        tag: 'div',
                        attributes: [
                            { attribute: 'class', value: ['flex my-8 px-10 py-4 flex-col gap-6 lg:gap-0 lg:flex-row justify-center'] },
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'div',
                                attributes: [
                                    { attribute: 'class', value: ['w-full text-left lg:w-1/2 lg:px-6 relative']},
                                ],
                                content: [
                                    Anmo.BuildElement ({
                                        tag: 'h2',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold text-xl text-black'] }
                                        ],
                                        content: 'Firearm'
                                    }),
                                    Anmo.BuildElement ({
                                        tag: 'p',
                                        attributes: [
                                            { attribute: 'class', value: ['text-black'] }
                                        ],
                                        content: 'Retreive a Firearms'
                                    }),
                                    Anmo.BuildElement({tag: 'br'}),
                                    Anmo.BuildElement({
                                        tag: 'p',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold text-black'] }
                                        ],
                                        content: 'GET: /v1/api/firearms/:id'
                                    }),
                                    Anmo.BuildElement({tag: 'br'}),
                                ]
                            }),
                            new CodeSnippet(responseExample(1)).getComponentHTML(),
                        ]
                    }),
                    Anmo.BuildElement ({
                        tag: 'div',
                        attributes: [
                            { attribute: 'class', value: ['flex my-8 px-10 py-4 flex-col gap-6 lg:gap-0 lg:flex-row justify-center'] },
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'div',
                                attributes: [
                                    { attribute: 'class', value: ['w-full text-left lg:w-1/2 lg:px-6 relative']},
                                ],
                                content: [
                                    Anmo.BuildElement ({
                                        tag: 'h2',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold text-xl text-black'] }
                                        ],
                                        content: 'Classification'
                                    }),
                                    Anmo.BuildElement ({
                                        tag: 'p',
                                        attributes: [
                                            { attribute: 'class', value: ['text-black'] }
                                        ],
                                        content: 'Retreive list of firearms Classifications'
                                    }),
                                    Anmo.BuildElement({tag: 'br'}),
                                    Anmo.BuildElement({
                                        tag: 'p',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold text-black'] }
                                        ],
                                        content: 'GET: /v1/api/classification'
                                    }),
                                    Anmo.BuildElement({tag: 'br'}),
                                    new ParamsTable(paramsDetails['/v1/api/classification']).getComponentHTML()
                                ]
                            }),
                            new CodeSnippet(responseExample(2)).getComponentHTML(),
                        ]
                    }),
                    Anmo.BuildElement ({
                        tag: 'div',
                        attributes: [
                            { attribute: 'class', value: ['flex my-8 px-10 py-4 flex-col gap-6 lg:gap-0 lg:flex-row justify-center'] },
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'div',
                                attributes: [
                                    { attribute: 'class', value: ['w-full text-left lg:w-1/2 lg:px-6 relative']},
                                ],
                                content: [
                                    Anmo.BuildElement ({
                                        tag: 'h2',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold text-xl text-black'] }
                                        ],
                                        content: 'Firearm'
                                    }),
                                    Anmo.BuildElement ({
                                        tag: 'p',
                                        attributes: [
                                            { attribute: 'class', value: ['text-black'] }
                                        ],
                                        content: 'Retreive a Classification'
                                    }),
                                    Anmo.BuildElement({tag: 'br'}),
                                    Anmo.BuildElement({
                                        tag: 'p',
                                        attributes: [
                                            { attribute: 'class', value: ['font-bold text-black'] }
                                        ],
                                        content: 'GET: /v1/api/classification/:id'
                                    }),
                                    Anmo.BuildElement({tag: 'br'}),
                                ]
                            }),
                            new CodeSnippet(responseExample(3)).getComponentHTML(),
                        ]
                    }),
                ]
            });
        } catch (error) {
            console.log(error);
            return this.componentError(error);
        }
    }
}     