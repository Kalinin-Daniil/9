// BEGIN
const magic = (...args) => {
    const innerFunction = (...innerArgs) => {
        return magic(...args.concat(innerArgs));
    };

    innerFunction.valueOf = () => args.reduce((acc, curr) => acc + curr, 0);

    return innerFunction;
};

export default magic;

// END
