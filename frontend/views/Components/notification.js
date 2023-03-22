const displaynotification = (msg) => {
    const notification = Anmo.BuildElement ({
        tag: 'div',
        attributes: [
            { 
                attribute: 'class',
                value: ['pt-2 my-2 pb-2.5 px-5 bg-white', 'text-base', 'font-medium','text-center','text-gray-900','rounded-lg','border','border-gray-300'] 
            },
        ],
        content: [
            Anmo.BuildElement ({
                tag: 'p',
                content: msg
            })
        ]
    });

    Anmo.Utils.Responsiveness.setByScreen('topRight','topRight','topCenter')

    new Anmo.Utils.NotificationIncubator(2000, Anmo.Utils.Responsiveness.setByScreen('topRight','topRight','topCenter')).displaynotification(notification);
}

export default {
    displaynotification
}