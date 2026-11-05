/**
 * Calcule la moyenne d'un tableau de nombres.
 * @param {number[]} numbers - Le tableau de nombres.
 * @returns {number} La moyenne, ou 0 si le tableau est vide.
 */
export const average = (numbers) => {
    if (!numbers || numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
};

/**
 * Arrondit un nombre à un certain nombre de décimales.
 * @param {number} num - Le nombre à arrondir.
 * @param {number} decimals - Le nombre de décimales (par défaut : 2).
 * @returns {number} Le nombre arrondi.
 */
export const roundTo = (num, decimals = 2) => {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
};

/**
 * Calcule un pourcentage à partir d'une valeur et d'un total.
 * @param {number} part - La partie.
 * @param {number} total - Le total.
 * @returns {number} Le pourcentage (ex: 50 pour 50%).
 */
export const calculatePercentage = (part, total) => {
    if (total === 0) return 0;
    return (part / total) * 100;
};