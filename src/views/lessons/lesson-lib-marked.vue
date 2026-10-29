<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <!-- Header / Intro -->
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Parsing Markdown avec Marked
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        <strong>Marked</strong> est un parseur Markdown ultra-rapide et léger pour JavaScript. Il permet de convertir
        instantanément du contenu Markdown en HTML.
      </p>
    </div>

    <!-- Section Éditeur & Prévisualisation -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
      <!-- Panneau d'édition -->
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <h2 class="card-title text-xl font-bold">Éditeur Markdown</h2>

              <!-- Dropdown d'exemples -->
              <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-xs btn-outline">
                  Charger un exemple ▾
                </div>
                <ul tabindex="0"
                  class="dropdown-content z-[10] menu p-2 shadow-lg bg-base-100 border border-base-300 rounded-box w-52 text-xs">
                  <li><a @click="loadExample('basic')">Syntaxe de base</a></li>
                  <li><a @click="loadExample('table')">Tableau</a></li>
                  <li><a @click="loadExample('code')">Bloc de code</a></li>
                </ul>
              </div>
            </div>

            <div class="form-control">
              <textarea v-model="markdownText"
                class="textarea textarea-bordered h-72 font-mono text-sm leading-relaxed focus:textarea-primary"
                placeholder="Écrivez votre contenu en Markdown ici..."></textarea>
            </div>
          </div>

          <!-- Options avancées -->
          <div class="pt-4 border-t border-base-200 mt-4 space-y-3">
            <label class="label cursor-pointer p-0">
              <span class="label-text font-semibold text-xs">Activer les options de configuration</span>
              <input type="checkbox" v-model="useAdvancedOptions" class="toggle toggle-primary toggle-sm" />
            </label>

            <div v-if="useAdvancedOptions"
              class="flex flex-wrap gap-4 pt-1 bg-base-200/50 p-3 rounded-box border border-base-300 text-xs">
              <label class="label cursor-pointer gap-2 p-0">
                <span class="label-text">GFM (GitHub Flavored Markdown)</span>
                <input type="checkbox" v-model="options.gfm" class="checkbox checkbox-xs checkbox-primary" />
              </label>

              <label class="label cursor-pointer gap-2 p-0">
                <span class="label-text">Sauts de ligne automatiques (Breaks)</span>
                <input type="checkbox" v-model="options.breaks" class="checkbox checkbox-xs checkbox-primary" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Panneau de prévisualisation HTML -->
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body flex flex-col">
          <h2 class="card-title text-xl font-bold mb-3">Prévisualisation HTML</h2>
          <div
            class="bg-base-200/50 border border-base-300 rounded-box p-4 flex-1 overflow-y-auto markdown-preview text-sm min-h-[300px]"
            v-html="renderedHTML"></div>
        </div>
      </div>
    </div>

    <!-- Section Théorie & Documentation -->
    <section id="theory">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-6">
        <h2 class="card-title text-2xl font-bold">À propos de la librairie Marked</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Code Shiki : Installation -->
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-2 block">1.
              Installation</span>
            <div v-if="codeInstallHighlighted" v-html="codeInstallHighlighted"
              class="overflow-x-auto rounded-lg text-sm"></div>
            <div v-else class="skeleton h-24 w-full rounded-lg"></div>
          </div>

          <!-- Code Shiki : Usage basique -->
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-2 block">2. Utilisation
              basique</span>
            <div v-if="codeUsageHighlighted" v-html="codeUsageHighlighted" class="overflow-x-auto rounded-lg text-sm">
            </div>
            <div v-else class="skeleton h-24 w-full rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour explorer toutes les options du parseur, consulte la
        <a href="https://marked.js.org/" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle de Marked
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { marked } from 'marked';
import { codeToHtml } from 'shiki';

interface MarkedOptions {
  gfm: boolean;
  breaks: boolean;
}

// --- État réactif de l'éditeur ---
const markdownText = ref < string > ('');
const useAdvancedOptions = ref < boolean > (false);
const options = ref < MarkedOptions > ({
  gfm: true,
  breaks: false
});

// --- Exemples prédéfinis ---
type ExampleKey = 'basic' | 'table' | 'code';

const examples: Record<ExampleKey, string> = {
  basic: `# Titre de niveau 1
## Titre de niveau 2

Paragraphe avec du texte **en gras** et *en italique*.

- Premier élément de liste
- Deuxième élément de liste

[Lien vers la doc Vue.js](https://vuejs.org)`,

  table: `| Produit | Quantité | Prix |
|---------|----------|------|
| Clavier | 2        | 45€  |
| Souris  | 1        | 25€  |
| Écran   | 2        | 300€ |`,

  code: `\`\`\`typescript
// Exemple de fonction TypeScript
function saluer(nom: string): string {
  return \`Bonjour \${nom} !\`;
}

console.log(saluer('Vue 3'));
\`\`\``
};

function loadExample(type: ExampleKey): void {
  markdownText.value = examples[type];
}

// --- Rendu HTML calculé ---
const renderedHTML = computed < string > (() => {
  if (!markdownText.value.trim()) {
    return '<p class="text-base-content/50 italic">La prévisualisation du rendu apparaîtra ici...</p>';
  }

  try {
    marked.setOptions({
      gfm: useAdvancedOptions.value ? options.value.gfm : true,
      breaks: useAdvancedOptions.value ? options.value.breaks : false
    });

    return marked.parse(markdownText.value) as string;
  } catch (error) {
    return `<p class="text-error font-bold">Erreur de rendu : ${(error as Error).message}</p>`;
  }
});

// --- Snippets bruts pour Shiki ---
const snippetInstall = `# Avec pnpm (recommandé)
pnpm add marked

# Avec npm
npm install marked`;

const snippetUsage = `import { marked } from 'marked';

const markdownInput = '# Titre principal\\nTexte **en gras**.';
const htmlOutput = marked.parse(markdownInput);

// Résultat : "<h1>Titre principal</h1><p>Texte <strong>en gras</strong>.</p>"`;

// --- Variables d'état pour le HTML coloré ---
const codeInstallHighlighted = ref < string > ('');
const codeUsageHighlighted = ref < string > ('');

onMounted(async () => {
  // Chargement de l'exemple par défaut
  markdownText.value = `# Bienvenue dans l'éditeur Markdown

Ceci est un exemple d'utilisation de la librairie **marked** dans Vue.js.

## Fonctionnalités
- Conversion Markdown vers HTML en temps réel
- Support de GitHub Flavored Markdown (GFM)
- Personnalisation dynamique des options

Modifiez ce texte ou choisissez un exemple dans le menu déroulant !`;

  const [installCode, usageCode] = await Promise.all([
    codeToHtml(snippetInstall, { lang: 'bash', theme: 'vitesse-dark' }),
    codeToHtml(snippetUsage, { lang: 'typescript', theme: 'vitesse-dark' })
  ]);

  codeInstallHighlighted.value = installCode;
  codeUsageHighlighted.value = usageCode;
});
</script>

<style scoped>
:deep(.markdown-preview h1) {
  font-size: 1.875rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  margin-top: 0.5rem;
}

:deep(.markdown-preview h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

:deep(.markdown-preview h3) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
}

:deep(.markdown-preview p) {
  margin-bottom: 0.75rem;
}

:deep(.markdown-preview ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
}

:deep(.markdown-preview ol) {
  list-style-type: decimal;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
}

:deep(.markdown-preview li) {
  margin-bottom: 0.25rem;
}

:deep(.markdown-preview strong) {
  font-weight: 700;
}
</style>