export function prompt(question, defaultValue) {
  return new Promise((resolve, reject) => {
    process.stdout.write(question + ' ');

    process.stdin.on('data', (data) => {
      const input = data.toString().trim();
      let result;

      if (typeof defaultValue === 'number') {
        result = Number(input);
        if (isNaN(result)) {
          result = defaultValue;
        }
      } else if (typeof defaultValue === 'boolean') {
        result = Boolean(input);
        if (input !== 'true' && input !== 'false') {
          result = defaultValue;
        }
      } else if (Array.isArray(defaultValue)) {
        result = input.split(',');
        if (result.length === 1 && result[0] === '') {
          result = defaultValue;
        }
      } else {
        result = input || defaultValue;
      }

      resolve(result);
      process.stdin.pause();
    });

    process.stdin.on('error', (err) => {
      reject(err);
    });
  });
}
