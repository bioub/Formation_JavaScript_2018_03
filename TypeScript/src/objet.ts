class Horloge {
    private now: Date;
    constructor(options: HorlogeOptions) {
    }
}

class UseHorloge {
    constructor(private horloge: Horloge) {

    }
}

interface HorlogeOptions {
    div: HTMLDivElement;
    format?: 'HH:mm:ss';
}

const div = document.querySelector<HTMLDivElement>('#div');
const clock = new Horloge({
    div,
});
const use = new UseHorloge(clock);

let toto: any;