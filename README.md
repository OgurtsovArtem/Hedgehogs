***[Hedgehogs](https://ogurtsovartem.github.io/Hedgehogs/)*** - Хотите ёжика?.
========================================

#### Ёжики тоже любят молоко.

## Описание 
-----------------------------------
#### Тестовый проект в ADWIN.agency. 
  Согласно заданию нейминг выполнен по БЭМу,
  Использованы svg спрайты,
  Продуманы варианты отображения на различных разрешениях
  Проект заверешен ≈ 35ч.

## Текущая версия.
-----------------------------------
- [x] Сверстаны две страницы
- [x] Сайт корректно отбражается на всех разрешениях ниже 2560px
- [x] Все элементы согласно заданию сверстаны и также корректно работают на всех разрешениях
- [x] Верстка создана по структуре БЭМ
- [x] Использование современных HTML-тегов

## Планы по доработке проекта.
-----------------------------------
- [ ] Добавить JS часть.
- [ ] Добавить отрисовку ifnfo компонентов при мобильной версии
- [ ] Добивить возмомжность скролить хедер и фиксировать страницу при открытии навигации
- [ ] Пересмотреть и оптимизировать некоторые решения по верстке

## Классы для управления элементами.
-----------------------------------
 HEADER

 Для управления меню выбираем класс `.header__nav` добваляем ему `active`.
 Для управления бургером выбираем класс `.button__burger` добваляем ему `active`.

 Чтобы при клике на стрелку открывалось подменю выбираем все кнопки с классом `.header__button-arrow` и добавляем класс `active` РОДИТЕЛЬСКОМУ(.parentElement) элементу.
 Также меню открывается при наведении, но на текущий момент это просто заглушка и hover повешан на id конкретного блока.

 SLIDER

 Для `.slider__container` есть возможность скрыть кнопки и принять вид для мобильной версии для этого нужно добавить класс `_phoneScreen` =>
 `.slider__container._phoneScreen` или добавить  `_phoneScreen` тегу `body`, перед этим разкомментируйте код в файле `slider__container`.
 Сейчас сотит `заглушка` на 920px

## Как работать с прокетом.
-----------------------------------

**Node.js.** [Скачать](https://nodejs.org/en/download/)

**Git Bash** [Скачать](https://git-scm.com/downloads)

* Открываем **Git Bash**
* Переходим в нужную папку  
`$ cd /ваша_папка`

* Клонируем фаилы репозитория в папку с проектом  
 `$ git clone https://github.com/OgurtsovArtem/NewsSearchFrontend.git`

* Устанавливаем все необходимое  
`$ npm install` 

### Команды для работы со сборкой: 

* Локальный запуск  
`$ npm run dev`

* Сборка прокта   
`$npm run build`

* Деплой на Gh-page  
`$npm run deploy`


Frontend for `ADWIN.agency` by `Ogurtsov Artem` 2021

