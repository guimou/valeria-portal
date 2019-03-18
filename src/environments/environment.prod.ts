import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
const keycloakConfig: KeycloakConfig = {
    url: 'https://keycloak-valeriademo.svd-pca.svc.ulaval.ca/auth',
    realm: 'valeria',
    clientId: 'portal'
};

export const environment = {
    production: true,
    keycloak: keycloakConfig
};
