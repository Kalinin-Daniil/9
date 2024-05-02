// BEGIN
const make = (numer = 0, denom = 1) => {
    let numerator = numer;
    let denominator = denom;

    const setNumer = (num) => {
        numerator = num;
    };

    const setDenom = (denom) => {
        denominator = denom;
    };

    const getNumer = () => {
        return numerator;
    };

    const getDenom = () => {
        return denominator;
    };

    const toString = () => {
        return `${numerator}/${denominator}`;
    };

    const add = (rat) => {
        const newNumer = numerator * rat.getDenom() + denominator * rat.getNumer();
        const newDenom = denominator * rat.getDenom();
        return make(newNumer, newDenom);
    };

    return {
        setNumer,
        setDenom,
        getNumer,
        getDenom,
        toString,
        add,
    };
};

export default make;
// END