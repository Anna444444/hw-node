export function prompt(question) {
    return new Promise((resolve, reject) => {
        process.stdout.write(question + ' ');

        process.stdin.on('data', (data) => {
            let input = data.toString().trim();
            resolve(input);
            process.stdin.pause();
        });

        process.stdin.on('error', (err) => {
            reject(err);
        });
    });
}
