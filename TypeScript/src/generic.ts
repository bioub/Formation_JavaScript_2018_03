const str = 'Romain';

function identity<T>(arg: T): T {
    return arg;
}

identity<string>(str).toUpperCase();



function timeout(delay: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
}

timeout(1000)
    .then((delay) => {
        console.log(`${delay}ms`);
    });