import { describe, it, expect } from 'vitest'
import { toUpperCase, capitalize, formatFullName } from '../services/stringUtils'

describe('stringUtils service',()=>{
    it('toUpperCase - transforme une chaine de caractère en majuscule',()=>{
        expect(toUpperCase('lol')).toBe('LOL')
    });
    it('toUpperCase - retourne une chaine vide si le paramètre est vide',()=>{
        expect(toUpperCase('')).toBe('')
    });
})