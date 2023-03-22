
export default class extends Anmo.AbstractView {
    constructor(config){
        super();

        if(config?.width){
            if (typeof config.width === 'string' || config.width instanceof String){
                this.width = config.width;
            }
        }

        if(config?.height){
            if (typeof config.height === 'string' || config.height instanceof String){
                this.width = config.height;
            }
        }

        if(config?.class){
            if (typeof config.class === 'string' || config.class instanceof String){
                this.class = config.class;
            }
        }
    }

    getComponentHTML() {
        try {
            return Anmo.BuildElement({
                tag: 'img',
                attributes: [
                    {  attribute: 'src', value: 'https://firebasestorage.googleapis.com/v0/b/amnosite.appspot.com/o/Spinner-1.2s-150px.gif?alt=media&token=a1936e91-b978-4286-a242-d818d650595b' },
                    {  attribute: 'width',  value: this.width ?? '140'} ,
                    { attribute: 'height', value: this.height ?? '140'  },
                    {  attribute: 'class', value: this.class ?? 'm-auto' }
                ],
            });
        } catch (error) {
            console.log(error)
            return this.componentError(error);
        }
    }
}
