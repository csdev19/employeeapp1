export class Employee{
    /*
    public name:string;
    public birthday:string;
    public email:string;
    public phone:string;
    public city:string;
    public salary:number;
    */
    constructor(
        public id:number,
        public name:string,
        public birthday:string,
        public email:string,
        public phone:string,
        public city:string,
        public salary:number,
        public gender:string,
        public company:string,
        public photoURL:string){}
}