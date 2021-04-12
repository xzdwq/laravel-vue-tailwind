## Установка
1. `git clone https://github.com/xzdwq/laravel8-vue3.git`
2. `cd laravel8-vue3`
3. `composer update`
4. `npm i`

## Корректировка базового профикса роутинка
В файле `resources/js/router.js` удалить аргумент функции `history: createWebHistory('/osdev/l8v3/public/')` (т.е. `history: createWebHistory()`)

## Разработка
Для обновления именений в компонентах Vue (моентальной пересборки при изменениях):  
`npm run watch`