const nav = document.querySelector('ul')
const table_inner = document.querySelector('tbody')


// nav
const navigation_list = [
    {
        icon: '/assets/icon/nav/main.svg',
        title: 'Рабочий стол',
        path: '#'
    },
    {
        icon: '/assets/icon/nav/offers.svg',
        title: 'Сделки',
        path: '#'
    },
    {
        icon: '/assets/icon/nav/tasks.svg',
        title: 'Задачи',
        path: '#'
    },
    {
        icon: '/assets/icon/nav/clients.svg',
        title: 'Клиенты',
        path: './pages/clients.html'
    },
    {
        icon: '/assets/icon/nav/analytics.svg',
        title: 'Аналитика',
        path: '#'
    },
    {
        icon: '/assets/icon/nav/chat.svg',
        title: 'Обратная связь',
        path: '#'
    },
    {
        icon: '/assets/icon/nav/preferences.svg',
        title: 'Настройки',
        path: '#'
    },
]

let nav_items = "";

for (let item of navigation_list) {
    nav_items += `<a href="${item.path}"><li class='navigation-list__item'><img src=${item.icon} alt='#'><p>${item.title}</p></li></a>`
}
nav.innerHTML = nav_items

// table
const data = [
    {
        fullName: 'Темирлан Капиянов',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
    },
    {
        fullName: 'Темирлан Капиянов',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
    },
]

let table = document.getElementById('table-body');

for (let i = 0; i <= data.length; i++) {
    let table_row = document.createElement('tr')
    for (let client of data) {
        var table_data = `<td><input type="checkbox" name="" id="" /></td>
                          <td>${client.fullName}</td>
                          <td>${client.manager}</td>
                          <td>${client.phone}</td>
                          <td>${client.email}</td>
                          <td>${client.createdAt}</td>
                          <td>${client.offerName}</td>`
    }
    table_row.innerHTML = table_data;
    table.appendChild(table_row)
}



