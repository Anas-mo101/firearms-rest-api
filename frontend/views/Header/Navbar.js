import loginDialog from "../Components/loginDialog.js";


export default class extends Anmo.AbstractView { 

    getComponentHTML() {
        try {
            return Anmo.BuildElement ({
                tag: 'div',
                attributes: [
                    { attribute: 'class', value: ['flex justify-end px-8 items-center gap-7']}
                ],
                content: [
                    Anmo.BuildElement ({
                        tag: 'button',
                        onTap: () => {
                            this.popupInc = new Anmo.Utils.PopupIncubator();
                    
                            const popup = Anmo.BuildElement ({
                                tag: 'div',
                                attributes: [
                                    { attribute: 'class', value: ['w-3/4 lg:w-1/4 h-2/3 bg-white rounded-lg flex flex-col justify-center items-center'] }
                                ],
                                content: [
                                    new loginDialog().getComponentHTML(),
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
                        attributes: [
                            { attribute: 'class', value: ['cursor-pointer  text-white'] },
                            { attribute: 'href', value: ['cursor-pointer  text-white'] },
                        ],
                        content: Anmo.BuildElement ({
                            tag: 'img',
                            attributes: [
                                { attribute: 'class', value: ['flex justify-end px-8 items-center gap-7']},
                                { attribute: 'src', value: ['./media/box-arrow-in-right.svg']}
                            ],
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