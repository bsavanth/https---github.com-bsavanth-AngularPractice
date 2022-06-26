import {Shape} from './Shape'

export class Circle extends Shape
{
    constructor(_X:Number, _Y:Number, private _R:Number)
    {
        super(_X, _Y);
    }

    public getInfo(): string {
        
        return super.getInfo() + ` Radius: ${this._R}`;
    }
}