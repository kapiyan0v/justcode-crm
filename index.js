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
        fullName: 'Наталья Захаровf',
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
    }
]

let table = document.getElementById('table-body');

for (let i = 0; i <= data.length; i++) {
    let table_row = document.createElement('tr')
    for (let client of data) {
        var table_data = `<td><svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.83734 0.27344H0.478556C0.360782 0.27344 0.295743 0.408792 0.367814 0.500198L6.55707 8.42442C6.60943 8.49175 6.67647 8.54623 6.75309 8.5837C6.82971 8.62117 6.91387 8.64066 6.99916 8.64066C7.08445 8.64066 7.16861 8.62117 7.24523 8.5837C7.32185 8.54623 7.38889 8.49175 7.44125 8.42442L13.6305 0.500198C13.7026 0.407034 13.6375 0.27344 13.5198 0.27344H12.161C12.0748 0.27344 11.9922 0.313869 11.9395 0.380666L7.00004 6.70879L2.05883 0.380666C2.00609 0.313869 1.92348 0.27344 1.83734 0.27344V0.27344Z" fill="black"/>
        </svg>
        </td>
                          <td><input type="checkbox" name="" id="" /></td>
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



