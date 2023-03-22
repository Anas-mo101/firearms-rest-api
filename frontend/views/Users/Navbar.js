import loginDialog from "../Components/loginDialog.js";


export default class extends Anmo.AbstractView { 

    getComponentHTML() {
        try {
            return Anmo.BuildElement ({
                tag: 'div',
                attributes: [
                    { attribute: 'class', value: ['flex justify-end px-2 lg:px-8 items-center gap-7']}
                ],
                content: [
                    Anmo.BuildElement ({
                        tag: 'a',
                        attributes: [
                            { attribute: 'class', value: ['cursor-pointer  text-white'] },
                            { attribute: 'href', value: './api/logout' },
                        ],
                        content: Anmo.BuildElement ({
                            tag: 'img',
                            attributes: [
                                { attribute: 'class', value: ['flex justify-end px-8 items-center gap-7']},
                                { attribute: 'src', value: ['./media/box-arrow-left.svg']}
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