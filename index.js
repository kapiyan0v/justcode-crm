const nav = document.querySelector('ul')
const table_inner = document.querySelector('tbody')


// nav
const navigation_list = [
    {
        icon: '/assets/icon/nav/main.svg',
        title: 'Рабочий стол',
        path: '/'
    },
    {
        icon: '/assets/icon/nav/offers.svg',
        title: 'Сделки',
        path: '../pages/404.html'
    },
    {
        icon: '/assets/icon/nav/tasks.svg',
        title: 'Задачи',
        path: '../pages/404.html'
    },
    {
        icon: '/assets/icon/nav/clients.svg',
        title: 'Клиенты',
        path: '../pages/clients.html'
    },
    {
        icon: '/assets/icon/nav/analytics.svg',
        title: 'Аналитика',
        path: '../pages/404.html'
    },
    {
        icon: '/assets/icon/nav/chat.svg',
        title: 'Обратная связь',
        path: '../pages/404.html'
    },
    {
        icon: '/assets/icon/nav/preferences.svg',
        title: 'Настройки',
        path: '../pages/404.html'
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

const arrowSvg = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M9.00002 12C8.82478 12.0003 8.65496 11.9393 8.52002 11.8275L4.02002 8.07746C3.86686 7.95016 3.77054 7.76723 3.75226 7.56891C3.73397 7.37059 3.79522 7.17312 3.92252 7.01996C4.04983 6.8668 4.23276 6.77048 4.43108 6.7522C4.6294 6.73391 4.82686 6.79516 4.98002 6.92246L9.00002 10.2825L13.02 7.04246C13.0967 6.98016 13.185 6.93364 13.2798 6.90557C13.3745 6.87749 13.4739 6.86842 13.5722 6.87888C13.6704 6.88933 13.7657 6.9191 13.8524 6.96648C13.9391 7.01386 14.0156 7.07792 14.0775 7.15496C14.1462 7.23208 14.1982 7.32255 14.2303 7.4207C14.2624 7.51886 14.2739 7.62258 14.264 7.72538C14.2542 7.82818 14.2232 7.92783 14.173 8.0181C14.1229 8.10837 14.0546 8.1873 13.9725 8.24996L9.47252 11.8725C9.33371 11.9666 9.16735 12.0115 9.00002 12Z" fill="#5E6A86"/>\n' +
    '</svg>'

let table = document.getElementById('table-body');

for (let i = 0; i <= data.length; i++) {
    let table_row = document.createElement('tr')
    for (let client of data) {
        
            var table_data = `<td>${arrowSvg}</td>
                          <td><input type="checkbox" name="" id=""/></td>
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

//  clients-change feature by Aibar and Bauyrzhan

const checkboxes = table.querySelectorAll('input[type="checkbox"]')
const checkAll = document.querySelector('.target-all')
const trs = table.querySelectorAll('tr');
checkAll.checked = false;
    let checkedBoxes = 0;

// выбор всех чекбоксов
checkAll.addEventListener('click', (e)=> {
   
    if (checkAll.checked) {
        for (let i of checkboxes) {
            i.checked = true;
           checkedBoxes++;
        }
        for (let tr of trs) {
            tr.classList.add('checked')
        }
        changeMenu.classList.remove('display-none')

    } else {
        for (let i of checkboxes) {
            i.checked = false;
            checkedBoxes--;
        }
        for (let tr of trs) {
            tr.classList.remove('checked')
        }
        changeMenu.classList.add('display-none')
    }

   
   
   
    checkedNum.innerHTML = checkedBoxes;
    
})

const changeMenu = document.querySelector('.clients-change')
const checkedNum = changeMenu.querySelector('.checked-numm')
const closeMenu = document.querySelector('.clients-change__button-close');
const deleteClients = document.querySelector('.clients-change__button-delete');
for (let checkbox of checkboxes) {
    checkbox.addEventListener('click', (e)=> {
       e.target.closest('tr').classList.toggle('checked')
       
           
       
    })
}
table.addEventListener('click', (e)=> {
    let checked = false;
    let num = 0;
    for (let checkbox of checkboxes) {
        if (checkbox.checked === true ) {
            checked = true;
            num++;
        } 
    }
    if (checked === true) {
        changeMenu.classList.remove('display-none')
        checkedNum.innerHTML = num;
    } else {
        changeMenu.classList.add('display-none')
    }
})

closeMenu.addEventListener('click', (e)=> {
    changeMenu.classList.add('display-none')
    checkAll.checked = false;
    for (let i of checkboxes) {
        if (i.checked === true) {
            i.checked = false;
            checkedBoxes--;
        }
    }
    for (let tr of trs) {
        tr.classList.remove('checked');
        
    }
})

deleteClients.addEventListener('click', (e)=> {
    for (let checkbox of checkboxes) {
        if (checkbox.checked === true) {
            checkbox.closest('tr').remove();
            checkbox.checked = false;
            checkedBoxes--
        }
    }
    changeMenu.classList.add('display-none')
    checkAll.checked = false;


})






