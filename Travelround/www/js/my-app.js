var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'travelround',
    // Theme
    theme: 'md',
    // App id
    id: 'com.phonegap.travelround',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: 'index.html',
            url: 'index.html',
        },
    ],
    // ... other parameters
});

var mainView = app.views.create('.view-main', {

    routes: [
        {
            path: 'signup.html',
            url: 'signup.html',
        },
        {
            path: 'login.html',
            url: 'login.html',
        },
    ],

});