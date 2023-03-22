

export default class extends Anmo.AbstractView { 
    constructor() {
        super();
    }

    getComponentHTML() {
        try {
            return Anmo.BuildElement ({
                tag: 'div',
                id: this.id,
                attributes: [
                    { attribute: 'class', value: ['relative flex flex-col lg:flex-row gap-24 w-full my-24 justify-around items-center']}
                ],
                content: [
                    Anmo.BuildElement ({
                        tag: 'div',
                        id: this.id,
                        attributes: [
                            { 
                                attribute: 'class',
                                value: ['relative rounded-lg shadow-xl h-48 w-48 flex flex-col justify-center items-center']
                            }
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'p',
                                attributes: [
                                    { attribute: 'class', value: ['font-bold text-center text-black'] }
                                ],
                                content: 'free'
                            }),
                            Anmo.BuildElement ({
                                tag: 'h1',
                                attributes: [
                                    { attribute: 'class', value: ['text-center font-extrabold tracking-tight leading-none text-black text-4xl md:text-5xl lg:text-6xl'] },
                                ],
                                content: '5000'
                            }),
                            Anmo.BuildElement ({
                                tag: 'p',
                                attributes: [
                                    { attribute: 'class', value: ['font-bold text-center text-black'] }
                                ],
                                content: 'calls/month'
                            }),
                        ]
                    }),
                    Anmo.BuildElement ({
                        tag: 'div',
                        id: this.id,
                        attributes: [
                            { 
                                attribute: 'class',
                                value: ['relative rounded-lg shadow-xl h-48 w-48 flex flex-col justify-center items-center']
                            }
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'h1',
                                attributes: [
                                    { attribute: 'class', value: ['text-center font-extrabold tracking-tight leading-none text-black text-4xl md:text-5xl lg:text-6xl'] },
                                ],
                                content: '+1200'
                            }),
                            Anmo.BuildElement ({
                                tag: 'p',
                                attributes: [
                                    { attribute: 'class', value: ['font-bold text-center text-black'] }
                                ],
                                content: 'firearms'
                            }),
                        ]
                    }),
                    Anmo.BuildElement ({
                        tag: 'div',
                        id: this.id,
                        attributes: [
                            { 
                                attribute: 'class',
                                value: ['relative rounded-lg shadow-xl h-48 w-48 flex flex-col justify-center items-center']
                            }
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'h1',
                                attributes: [
                                    { attribute: 'class', value: ['text-center font-extrabold tracking-tight leading-none text-black text-4xl md:text-5xl lg:text-6xl'] },
                                ],
                                content: '+5'
                            }),
                            Anmo.BuildElement ({
                                tag: 'p',
                                attributes: [
                                    { attribute: 'class', value: ['font-bold text-center text-black'] }
                                ],
                                content: 'classifications'
                            }),
                        ]
                    }),
                    
                ]
            });
        } catch (error) {
            return this.componentError(error);
        }
    }
}