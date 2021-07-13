const AUTHENTICATE_ROUTE = {
    LOGIN: '@AUTHENTICATE_ROUTE/LOGIN',
    REGISTER: '@AUTHENTICATE_ROUTE/REGISTER',
};

const APP_ROUTE = {
    MAIN_TAB: 'MAIN_TAB',
};

const HOME_ROUTE = {
    ROOT: 'HOME_ROOT',
    HOME: 'HOME',
    
};

const EXPLORE_ROUTE = {
    ROOT: 'SETTING_ROOT',
};

const CART_ROUTE = {
    ROOT: 'NOTIFICATION_ROOT',
};

const OFFER_ROUTE = {
    ROOT: 'ACCOUNT_ROUTE',
};

const ACCOUNT_ROUTE = {
    ROOT: 'HEART_ROUT',
};

const TAB_NAVIGATION_ROOT = {
    HOME_ROUTE,
    EXPLORE_ROUTE,
    CART_ROUTE,
    OFFER_ROUTE,
    ACCOUNT_ROUTE,
};

export { APP_ROUTE, TAB_NAVIGATION_ROOT, AUTHENTICATE_ROUTE };
