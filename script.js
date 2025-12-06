// выводит окошко на экран
// alert('222');

// Только раскрытие текста
// document.querySelector('.info__link').addEventListener('click', function () {
//     this.remove()
//     document.querySelector('.info__text').classList.add('info__text--active');
// })

let buttonText;
let buttonText2 = "Скрыть текст";

// Раскрытие-сворачивание
// document.querySelector('.info__link').addEventListener('click', function () {
//     document.querySelector('.info__text').classList.toggle('info__text--active');
//     if (this.textContent == 'Показать полностью') {
//         this.textContent = "Скрыть текст";
//     } else {
//         this.textContent = "Показать полностью";
//     }
// })

document.querySelector('.info__link').addEventListener('click', function () {
    document.querySelector('.info__text').classList.toggle('info__text--active');
    buttonText = this.textContent;
    this.textContent = buttonText2;
    buttonText2 = buttonText;
})

document.addEventListener('DOMContentLoaded', function () {


    const buttonPopup = document.querySelector('.catalog__filter');
    const popupFilter = document.querySelector('.popup-filter');
    if (buttonPopup) {
        buttonPopup.addEventListener('click', function () {


            popupFilter.classList.add('popup-filter--open');
            document.body.classList.add('no-scroll');
        });
    }
    const closeBtn = document.querySelector('.filters__close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {

            popupFilter.classList.remove('popup-filter--open');
            document.body.classList.remove('no-scroll');
        });
    }

    let titles = [
        'Общее',
        'Сыр',
        'Мясо',
        'Компонент',
    ];

    let buttons = [
        [
            'Хит',
            'Новинка',
            'С мясом',
            'Вегетарианская',
            'С курицей',
            'Без лука',
            'С грибами',
            'С морепродуктами',
            'Барбекю',
        ],
        [
            'Реджанито',
            'Моцарелла',
            'Чеддер',
            'С голубой плесенью',
            'Смесь итальянских сыров',
            'Мягкий молодой сыр',
        ],
        [
            'Пепперони',
            'Свинина',
            'Ветчина',
            'Бекон',
            'Говядина',
            'Чоризо',
            'Колбаски',
            'Куриная грудка',
        ],
        [
            'Креветка',
            'Ананасы',
            'Шампиньоны',
            'Лук',
            'Перец халапеньо',
            'Орегано',
            'Зеленый перец',
            'Томаты',
            'Чеснок',
            'Красный перец',
            'Оливки',
            'Маслины',
            'Клубника',
            'Смесь итальянских трав',
        ],
    ];

    const groups = document.querySelector('.filters__body')
    if (groups) {
        let groupHtml = '';
        for (let i = 0; i < titles.length; i++) {
            let buttonsHtml = '';
            for (let j = 0; j < buttons[i].length; j++) {
                buttonsHtml = buttonsHtml + `<button class="filter-tag">${buttons[i][j]}</button>`
            }
            groupHtml = groupHtml + `<div class="filters__group">
                    <h3 class="filters__group-title">${titles[i]}</h3>
                    <div class="filters__list filter-common">
                       ${buttonsHtml}
                       </div> 
                </div>`
        }
        groups.innerHTML = groupHtml;

        if (groups) {
            groups.innerHTML = groupHtml;
            const filterTags = document.querySelectorAll('.filter-tag');
            filterTags.forEach(tag => {
                tag.addEventListener('click', function () {
                    this.classList.toggle('filter-tag--active');
                });
            });
        }
    }
});

// for (let i = 0; i < buttons.length; i++) {
//            const element = buttons[i];
//           let newElement = document.createElement('button')
//           newElement.classList.add('filter-tag');
//          newElement.textContent = buttons[i]
//         list.append(newElement)
//      }