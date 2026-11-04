// src/__tests__/evan-you-tribute.spec.js
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EvanYouTribute from '../views/evan-you-tribute.vue'

describe('evan-you-tribute.vue', () => {
  it("s'affiche correctement sans erreur", () => {
    const wrapper = mount(EvanYouTribute)
    expect(wrapper.exists()).toBe(true)
  })

  it("affiche le titre principal de l'en-tête", () => {
    const wrapper = mount(EvanYouTribute)
    const title = wrapper.find('h1')

    expect(title.exists()).toBe(true)
    expect(title.text()).toContain('Le Génie derrière Vue.js et Vite')
  })

  it("affiche les informations et le portrait d'Evan You", () => {
    const wrapper = mount(EvanYouTribute)

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('alt')).toBe("Portrait d'Evan You")

    expect(wrapper.text()).toContain('Evan You')
    expect(wrapper.text()).toContain('Créateur de Vue.js et Vite.js')
  })

  it("contient le mockup de code d'admiration", () => {
    const wrapper = mount(EvanYouTribute)
    const mockupCode = wrapper.find('.mockup-code')

    expect(mockupCode.exists()).toBe(true)
    expect(mockupCode.text()).toContain("const admirationLevel = 'MAX_FLAME';")
  })

  it('affiche les cartes pour les contributions majeures (Vue.js & Vite.js)', () => {
    const wrapper = mount(EvanYouTribute)
    const headings = wrapper.findAll('h3')
    const titles = headings.map((h) => h.text())

    expect(titles).toContain('Vue.js')
    expect(titles).toContain('Vite.js')
  })

  it('affiche le bouton d\'interaction "Je suis fan !"', () => {
    const wrapper = mount(EvanYouTribute)
    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.text()).toContain('Je suis fan !')
  })
})