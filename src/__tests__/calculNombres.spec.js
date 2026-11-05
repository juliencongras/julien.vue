import { describe, it, expect } from 'vitest'
import { average, roundTo, calculatePercentage } from '../services/calculNombres';

describe('calculNombres service',()=>{
    it("average - Calcule la moyenne d'un tableau de nombres",()=>{
        expect(average([5, 10, 15])).toBe(10)
    });
    it("average - Retourn 0 si le tableau est vide",()=>{
        expect(average([])).toBe(0)
    });

    it("roundTo - Arrondit un nombre à un certain nombre de décimales",()=>{
        expect(roundTo(3.123456789, 2)).toBe(3.12)
    });

    it("calculatePercentage - Calcule un pourcentage à partir d'une valeur et d'un total",()=>{
        expect(calculatePercentage(300, 2000)).toBe(15)
    })
})