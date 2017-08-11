(function () {
    'use strict';

    //Application Module and Dependencies
    angular.module('PromoltaApp', [
        'ui.router',
        'ngResource',
        'PromoltaApp.controllers',
        'PromoltaApp.services'
    ])
        .config(configData);

    angular.module('PromoltaApp.controllers', []);

    angular.module('PromoltaApp.services', []);

    //Function to route the Application state with appropriate functionalities
    function configData($stateProvider, $urlRouterProvider, $httpProvider) {
        
        //To check for Authorization errors
        $httpProvider.interceptors.push('AuthInterceptor');

        //Route states with functionalities for various App Sections.
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'content': { templateUrl: '/template/auth/signin.html',
                    controller: 'SignInController',
                    controllerAs: 'vm'
                }
                }
            })

            .state('compose', {
                url: '/compose',
                views: {
                    // 'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/compose.html',
                        controller: 'ComposeController',
                        controllerAs: 'vm'
                    },
                    // 'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })

            .state('inbox', {
                url: '/inbox',
                views: {
                    // 'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/inbox.html',
                        controller: 'InboxController',
                        controllerAs: 'vm'
                    },
                    // 'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })

            .state('draft', {
                url: '/draft',
                views: {
                    // 'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/draft.html',
                        controller: 'DraftController',
                        controllerAs: 'vm'
                    },
                    // 'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })

            .state('draftPage', {
                url: '/draftPage',
                views: {
                    // 'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/draftPage.html',
                        controller: 'DraftPageController',
                        controllerAs: 'vm'
                    },
                    // 'footer': { templateUrl: '/template/basic/footer.html' }

                },
                params: {
                            obj: null
                        }
            })
            .state('indexPage', {
                url: '/indexPage',
                views: {
                    // 'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/indexPage.html',
                        controller: 'InboxPageController',
                        controllerAs: 'vm'
                    },
                    // 'footer': { templateUrl: '/template/basic/footer.html' }

                },
                params: {
                            obj: null
                        }
            })
            .state('aboutus', {
                url: '/aboutus',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/basic/aboutus.html'
                    },
                    'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })


            .state('ourstory', {
                url: '/ourstory',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/basic/ourstory.html'
                    },
                    'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })

            .state('career', {
                url: '/career',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/basic/career.html'
                    },
                    'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })

             .state('tools', {
                url: '/tools',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/basic/tools.html',
                        controller: 'ToolController'
                    },
                    'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })

            .state('usefullinks', {
                url: '/usefullinks',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/basic/usefullinks.html'
                    },
                    'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })

            .state('usefuldoc', {
                url: '/usefuldoc',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/basic/usefuldoc.html'
                    },
                    'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })


            .state('faq', {
                url: '/faq',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/basic/faq.html',
                        controller: 'FaqController',
                        controllerAs: 'vm'
                    },
                    'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })

            .state('T&C', {
                url: '/T&C',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/basic/T&C.html'
                    },
                    'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })

            .state('Privacy', {
                url: '/Privacy',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/basic/Privacy.html'
                    },
                    'footer': { templateUrl: '/template/basic/footer.html' }

                }
            })

            .state('signin', {
                url: '/auth/signin',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/auth/signin.html',
                        controller: 'SignInController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('signup', {
                url: '/auth/signup',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/auth/signup.html',
                        controller: 'SignUpController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('forgotpassword', {
                url: '/auth/forgotpassword',
                views: {
                    'navigation': { templateUrl: '/template/basic/navbar.html' },
                    'content': {
                        templateUrl: '/template/auth/forgotpassword.html',
                        controller: 'ForgotPasswordController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('signout', {
                url: '/auth/signout'
            })
            .state('dashboard', {
                url: '/dashboard',
                views: {
                    'navigation': { templateUrl: '/template/basic/admin-navbar.html' },
                    'content': {
                        templateUrl: '/template/admin/index.html',
                        controller: 'DashboardController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('dashboard.shipments', {
                url: '/shipments',
                isLoggedIn: true,
                views: {
                    'navigation': { templateUrl: '/template/basic/admin-navbar.html' },
                    'content': { templateUrl: '/template/admin/index.html' },
                    'dashboardPageContent': {
                        templateUrl: '/template/admin/shipments.html',
                        controller: 'ShipmentsController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('dashboard.comingsoon', {
                url: '/comingsoon',
                isLoggedIn: true,
                views: {
                    'navigation': { templateUrl: '/template/basic/admin-navbar.html' },
                    'content': { templateUrl: '/template/admin/index.html' },
                    'dashboardPageContent': {
                        templateUrl: '/template/admin/comingsoon.html',

                    }
                }
            })

            .state('dashboard.track', {
                url: '/track',
                isLoggedIn: true,
                views: {
                    'navigation': { templateUrl: '/template/basic/admin-navbar.html' },
                    'content': { templateUrl: '/template/admin/index.html' },
                    'dashboardPageContent': {
                        templateUrl: '/template/admin/track.html',

                    }
                }
            })
            .state('dashboard.quotes', {
                url: '/quotes',
                isLoggedIn: true,
                views: {
                    'navigation': { templateUrl: '/template/basic/admin-navbar.html' },
                    'content': { templateUrl: '/template/admin/index.html' },
                    'dashboardPageContent': {
                        templateUrl: 'template/admin/quotes.html',
                        controller: 'QuotesController',
                        controllerAs: 'vm'
                    }
                },
                params: {
                    tab_index:1
                }
            })
            .state('dashboard.bookings', {
                url: '/bookings',
                isLoggedIn: true,
                views: {
                    'navigation': { templateUrl: '/template/basic/admin-navbar.html' },
                    'content': { templateUrl: '/template/admin/index.html' },
                    'dashboardPageContent': {
                        templateUrl: 'template/admin/bookings.html',
                        controller: 'BookingsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('dashboard.show_air_bookings', {
                url: '/bookings/:id/air',
                isLoggedIn: true,
                views: {
                    'navigation': { templateUrl: '/template/basic/admin-navbar.html' },
                    'content': { templateUrl: '/template/admin/index.html' },
                    'dashboardPageContent': {
                        templateUrl: 'template/admin/air_booking.html',
                        controller: 'ShowAirBookingController',
                        controllerAs: 'vm'
                    }
                },
                params: {
                    id: null,
                    total_cost: null
                }
            })
            .state('dashboard.show_ocean_bookings', {
                url: '/bookings/:id/ocean',
                isLoggedIn: true,
                views: {
                    'navigation': { templateUrl: '/template/basic/admin-navbar.html' },
                    'content': { templateUrl: '/template/admin/index.html' },
                    'dashboardPageContent': {
                        templateUrl: 'template/admin/ocean_booking.html',
                        controller: 'ShowOceanBookingController',
                        controllerAs: 'vm'
                    }
                },
                params: {
                    id: null,
                    total_cost: null
                }
            });
        $urlRouterProvider.otherwise('/');
    }

})();