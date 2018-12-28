import ComponentsFrenchPlugin from '@modul/lang/fr';
import { BundleMessagesMap, FRENCH } from '@modul/utils/i18n/i18n';
import { PluginObject, VueConstructor } from 'vue';

const messages: BundleMessagesMap = {
    'common': {
        'confirm': 'Ok',
        'cancel': 'Annuler'
    },
    'welcome': {
        'valeria': 'valeria',
        'tagline': 'votre science des données',
        'welcome': 'Bienvenue',
        'intro': 'Pour personnaliser ce projet, consulter la documentation du projet <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli</a>.'
    },
    'about': {
        'about': 'Valeria est un projet de l\'Université Laval'
    },
    'todolist': {
        'welcome': 'Gestion des tâches à faire',
        'status-open': 'Ouvert',
        'status-in_progress': 'En cours',
        'status-done': 'Complété',
        'status-wont_complete': 'Ne sera pas complété'
    }
};

const FrenchPlugin: PluginObject<any> = {
    install(v: VueConstructor): void {
        v.use(ComponentsFrenchPlugin);
        v.prototype.$i18n.addMessages(FRENCH, messages);
    }
};

export default FrenchPlugin;
