
export default class extends Anmo.AbstractView { 
    constructor() {
        super();
    }

    getComponentHTML() {
        try {
            return Anmo.BuildElement ({
                tag: 'section',
                attributes: [
                    {
                        attribute: 'class',
                        value: ['relative shadow-lg h-20 flex w-full justify-center bg-black items-center'] 
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
                                { attribute: 'href', value: 'https://anmo.space' },
                                { attribute: 'data-link',},
                            ],
                            content: Anmo.BuildElement ({
                                tag: 'p',
                                attributes: [
                                    { attribute: 'class', value: ['font-bold text-center text-white'] }
                                ],
                                content: `Powered by ANMO`
                            }),
                        })
                    }),
                
                ]
            });
        } catch (error) {
            console.log(error)
            return this.componentError(error);
        }
    }
}