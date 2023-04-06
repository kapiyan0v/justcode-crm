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
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
        index:'0',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
        index:'1',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
        index:'2',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
        index:'3',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
        index:'4',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
        index:'5',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
        index:'6',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
        index:'7',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
        index:'8',
    },
    {
        fullName: 'Наталья Захарова',
        manager: 'Мырза Дуйсебеков',
        phone: '(702)364-79-51',
        email: 'stone@meekness.com',
        createdAt: '18.12.2017 02:33:48',
        offerName: 'Информационная поддержка сайтов',
        index:'9',
    },
]
var arrowSvg = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M9.00002 12C8.82478 12.0003 8.65496 11.9393 8.52002 11.8275L4.02002 8.07746C3.86686 7.95016 3.77054 7.76723 3.75226 7.56891C3.73397 7.37059 3.79522 7.17312 3.92252 7.01996C4.04983 6.8668 4.23276 6.77048 4.43108 6.7522C4.6294 6.73391 4.82686 6.79516 4.98002 6.92246L9.00002 10.2825L13.02 7.04246C13.0967 6.98016 13.185 6.93364 13.2798 6.90557C13.3745 6.87749 13.4739 6.86842 13.5722 6.87888C13.6704 6.88933 13.7657 6.9191 13.8524 6.96648C13.9391 7.01386 14.0156 7.07792 14.0775 7.15496C14.1462 7.23208 14.1982 7.32255 14.2303 7.4207C14.2624 7.51886 14.2739 7.62258 14.264 7.72538C14.2542 7.82818 14.2232 7.92783 14.173 8.0181C14.1229 8.10837 14.0546 8.1873 13.9725 8.24996L9.47252 11.8725C9.33371 11.9666 9.16735 12.0115 9.00002 12Z" fill="#5E6A86"/>\n' +
    '</svg>'
var arrowSvg_down = '<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
'<path d="M12.1627 8.72659H13.5214C13.6392 8.72659 13.7043 8.59124 13.6322 8.49983L7.44293 0.575611C7.39057 0.508284 7.32353 0.453805 7.24691 0.41633C7.17029 0.378856 7.08613 0.359375 7.00084 0.359375C6.91555 0.359375 6.83139 0.378856 6.75477 0.41633C6.67815 0.453805 6.61111 0.508284 6.55875 0.575611L0.369492 8.49983C0.297422 8.593 0.362461 8.72659 0.480234 8.72659H1.83902C1.92516 8.72659 2.00777 8.68616 2.06051 8.61936L6.99996 2.29124L11.9412 8.61936C11.9939 8.68616 12.0765 8.72659 12.1627 8.72659V8.72659Z" fill="black"/>\n' + 
'</svg>'



let table = document.getElementById('table-body');

for (let i = 0; i <= data.length; i++) {
    let table_row = document.createElement('tr')
    for (let client of data) {
        var table_data = `<div class="clients-table"><td id="${i}" onclick="expandedRow(this)">${arrowSvg}</td><td style="display:none" id="${i}_down" onclick="collapseRow(this)">${arrowSvg_down}</td>
                          <td><input type="checkbox" name="" id="" /></td>
                          <td>${client.fullName}</td>
                          <td>${client.manager}</td>
                          <td>${client.phone}</td>
                          <td>${client.email}</td>
                          <td>${client.createdAt}</td>
                          <td>${client.offerName}</td></div>
                          <div id="button-block-${i}" style="display:none" class="test"><button class="button-expanded" id="button-${i}">Перенос на новый хостинг</button>
                          <button class="button-expanded" id="button-${i}">Сайт витрина</button>
                          <button class="button-expanded" id="button-${i}">Юридический сайт</button>
                          <button class="button-expanded" id="button-${i}">Доработка сайта</button>
                          <button class="button-expanded" id="button-${i}">Сайт застройщика</button></div>`
        function expandedRow(obj) {
            number = 'button-block-' + obj.id
            document.getElementById(number).style.removeProperty('display')
            arrow_down = obj.id + '_down'
            arrow = obj.id
            document.getElementById(arrow_down).style.removeProperty('display')
            document.getElementById(arrow).style.display = 'none'
         
        }
        function collapseRow(obj) {
            number = 'button-block-' + obj.id
            number_cutted = number.slice(0,14)
            // console.log(number_cutted);
            document.getElementById(number_cutted).style.display = 'none'
            arrow_down = obj.id
            arrow = obj.id + '_down'
            arrow_cutted = arrow.slice(0,1)
            // console.log(arrow_cutted);
            document.getElementById(arrow_cutted).style.removeProperty('display')
            document.getElementById(arrow_down).style.display = 'none'
            
        }
                          
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







