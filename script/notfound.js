const nav = document.querySelector('ul')

const navigation_list = [
    {
        icon: '/assets/icon/nav/main.svg',
    
        path: '/'
    },
    {
        icon: '/assets/icon/nav/offers.svg',
       
        path: '../pages/404.html'
    },
    {
        icon: '/assets/icon/nav/tasks.svg',
       
        path: '../pages/404.html'
    },
    {
        icon: '/assets/icon/nav/clients.svg',
      
        path: '../pages/clients.html'
    },
    {
        icon: '/assets/icon/nav/analytics.svg',
       
        path: '../pages/404.html'
    },
    {
        icon: '/assets/icon/nav/chat.svg',
      
        path: '../pages/404.html'
    },
    {
        icon: '/assets/icon/nav/preferences.svg',
        
        path: '../pages/404.html'
    },
]

let nav_items = "";

for (let item of navigation_list) {
    nav_items += `<a href="${item.path}"><li class='navigation-list__item'><img src=${item.icon} alt='#'></a>`
}
nav.innerHTML = nav_items
