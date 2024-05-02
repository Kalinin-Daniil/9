// BEGIN
class Money {
    constructor(value, currency = 'usd') {
        this.value = value;
        this.currency = currency;
    }

    getValue() {
        return this.value;
    }

    getCurrency() {
        return this.currency;
    }

    exchangeTo(targetCurrency) {
        let newValue;
        if (this.currency === 'usd' && targetCurrency === 'eur') {
            newValue = this.value * 0.7;
        } else if (this.currency === 'eur' && targetCurrency === 'usd') {
            newValue = this.value * 1.2;
        } else {
            newValue = this.value;
        }
        return new Money(newValue, targetCurrency);
    }

    add(money) {
        let newValue;
        if (this.currency !== money.getCurrency()) {
            const convertedMoney = money.exchangeTo(this.currency);
            newValue = this.value + convertedMoney.getValue();
        } else {
            newValue = this.value + money.getValue();
        }
        return new Money(newValue, this.currency);
    }

    format() {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: this.currency }).format(this.value);
    }
}

export default Money;

// END
