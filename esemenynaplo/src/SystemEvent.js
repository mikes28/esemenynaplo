export default class SystemEvent {
    constructor(type, desc, time) {
        this.type = type;
        this.desc = desc;
        this.time = new Date(time);
    }
    toString() {
        return `${this.time} - ${this.desc}`;
    }
    
}
