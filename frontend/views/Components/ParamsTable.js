

export default class extends Anmo.AbstractView { 
    constructor(params) {
        super();
        this.params = params;
    }

    getComponentHTML() {
        try {
            
            const content = this.params.map((e) => {
                return Anmo.BuildElement({
                    tag: 'tr',
                    attributes: [
                        { attribute: 'class', value: ['my-4']}
                    ],
                    content: [
                        Anmo.BuildElement({
                            tag: 'td',
                            attributes: [
                                { attribute: 'class', value: ['border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4']}
                            ],
                            content: e.parameter
                        }),
                        Anmo.BuildElement({
                            tag: 'td',
                            attributes: [
                                { attribute: 'class', value: ['border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4']}
                            ],
                            content: e.type
                        }),
                        Anmo.BuildElement({
                            tag: 'td',
                            attributes: [
                                { attribute: 'class', value: ['border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4']}
                            ],
                            content: e.desc
                        }),
                    ]
                })
            });


            return Anmo.BuildElement({
                tag: 'div',
                attributes: [
                    { attribute: 'class', value: ['relative overflow-x-auto']}
                ],
                content: Anmo.BuildElement ({
                    tag: 'table',
                    id: this.id,
                    attributes: [
                        { attribute: 'class', value: ['table-auto w-full']}
                    ],
                    content: [
                        Anmo.BuildElement ({
                            tag: 'thead',
                            attributes: [
                                { attribute: 'class', value: ['border-b-2']}
                            ],
                            content: [
                                Anmo.BuildElement ({
                                    tag: 'tr',
                                    content: [
                                        Anmo.BuildElement ({
                                            tag: 'th',
                                            attributes: [
                                                { attribute: 'class', value: ['p-4']}
                                            ],
                                            content: 'Parameter'
                                        }),
                                        Anmo.BuildElement ({
                                            tag: 'th',
                                            attributes: [
                                                { attribute: 'class', value: ['p-4']}
                                            ],
                                            content: 'Type'
                                        }),
                                        Anmo.BuildElement ({
                                            tag: 'th',
                                            attributes: [
                                                { attribute: 'class', value: ['p-4']}
                                            ],
                                            content: 'Description'
                                        }),
                                    ]
                                }),
                            ]
                        }),
                        Anmo.BuildElement ({
                            tag: 'tbody',
                            content: [
                                ...content
                            ]
                        })
                    ]
                })
            });
        } catch (error) {
            return this.componentError(error);
        }
    }
}