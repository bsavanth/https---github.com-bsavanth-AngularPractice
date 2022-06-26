export class Shape{

    constructor(private _X:Number, private _Y:Number)
    {

    }

    public getInfo():string
    {
        return `X value: ${this._X}, Y value: ${this._Y}`;
    }

}