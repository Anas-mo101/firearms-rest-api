import bannerAnimation from '../Components/bannerAnimation.js'


export default class extends Anmo.AbstractView { 
    constructor() {
        super();
        this.isLoading = false;
    }

    getComponentHTML() {
        try {


            return Anmo.BuildElement ({
                tag: 'section',
                id: 'lineCanvas',
                style: {
                    height: '85%',
                    position: 'relative',
                    'z-index': '1',
                    display: Anmo.Utils.Responsiveness.setByScreen('grid','block','block'),
                    'grid-template-columns': '1fr 1.5fr',
                    'align-items': 'center'
                },
                content: [
                    Anmo.BuildElement({
                        tag: 'script',
                        attributes: [
                            { attribute: 'defer', value: ['true'] }
                        ],
                        content: bannerAnimation
                    }),
                    Anmo.BuildElement ({
                        tag: 'div',
                        id: this.id,
                        attributes: [
                            { attribute: 'class', value: ['relative py-8 flex justify-center flex-col h-full','px-10','mx-auto','max-w-screen-xl','lg:py-16','lg:px-12'] }
                        ],
                        content: [
                            Anmo.BuildElement ({
                                tag: 'h1',
                                attributes: [
                                    { attribute: 'class', value: ['text-left relative my-8 font-extrabold tracking-tight leading-none text-4xl md:text-5xl lg:text-6xl dark:text-white']},
                                ],
                                style: {
                                    'z-index': '2',
                                },
                                content: 'Firearms REST API'
                            }),
                            Anmo.BuildElement ({
                                tag: 'p',
                                attributes: [
                                    { attribute: 'class', value: ['text-left mb-2 relative','font-normal','text-gray-500','text-lg','lg:text-xl'] }
                                ],
                                style: {
                                    'z-index': '2',
                                    'padding-right': Anmo.Utils.Responsiveness.setByScreen('0','0','5px'),
                                },
                                content: [
                                    'Lock and load with our Firearms REST API'
                                ]
                            }),
                        ]
                    }),
                    !Anmo.Utils.Responsiveness.isDesktop() ? null : Anmo.BuildElement ({
                        tag: 'img',
                        style: {
                            'height': '350px',
                            'z-index': '1',
                        },
                        attributes: [
                            { attribute: 'src', value: './media/banner_gun.png' },
                        ],
                    })
                ]
            });
        } catch (error) {
            console.log(error)
            return this.componentError(error);
        }
    }
}