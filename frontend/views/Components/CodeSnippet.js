import notification from "./notification";

export default class CodeSnippet extends Anmo.AbstractView { 
    constructor(snippet) {
        super();
        // split at line breaks
        this.snippet = snippet;
        this.snippetCode = snippet.split('\n');
    }

    getComponentHTML() {
        try {

            const codeSnippet = this.snippetCode.map((line) => {
                return Anmo.BuildElement ({
                    tag: 'p',
                    attributes: [
                        { attribute: 'class', value: ['font-bold text-left'] }
                    ],
                    content: line
                });
            });

            return Anmo.BuildElement ({
                tag: 'div',
                id: this.id,
                attributes: [
                    { attribute: 'class', value: ['relative overflow-x-auto w-full lg:w-1/2 shadow-lg py-10 px-6 bg-black text-gray-300 rounded-lg'] }
                ],
                content: [
                    Anmo.BuildElement ({
                        tag: 'button',
                        attributes: [
                            { attribute: 'class', value: ['absolute font-bold my-auto top-2 right-2 px-2 py-1 border border-gray-300 text-gray-900 text-sm bg-gray-300 rounded-lg '] }
                        ],
                        onTap: async () => {
                            try {
                                await navigator.clipboard.writeText(this.snippet);
                                notification.displaynotification('Copied to Clipboard');
                            } catch (err) {
                                console.error('Failed to copy: ', err);
                            }
                        },
                        content: [
                            'Copy'
                        ]
                    }),
                    Anmo.BuildElement ({
                        tag: 'pre',
                        style: {
                            'white-space': 'break-spaces'
                        },
                        attributes: [
                            { attribute: 'class', value: ['text-xs lg:text-sm '] }
                        ],
                        content:[
                            ...codeSnippet
                        ]
                    })
                    
                ]
            });
        } catch (error) {
            return this.componentError(error);
        }
    }
}