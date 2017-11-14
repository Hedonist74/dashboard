Casual `Dashboard` создан на основе gulp-scss темплейта и макета, предоставленных [dmgame](https://github.com/dmgame)
=====================

###### Творил через:
-------------
`jdk`, `npm`, `git`,
`gulp`, `scss`, `webstorm`,
`photoshop`, `colormania`

###### Основные функции:
-------------
`chart.js`, `jquery [bPopup, formstyler, scrollbar]`,
`preloader`, `datepicker`, `dropdown`

## Страницы:

 * General
 * Details
 * Links
 * Banners
 * Personal Data
 * Payout
 * Postback

## Модальные окна:

 * Add Links
 * Banners
 * Login
 * Quit

Адаптивно! :+1:

@media расположены логично, найти труда не составит. Сброс применялся. Cтили расписаны по компонентам. Классы понятные.

###### Привожу список переменных для scss (из _variables.scss):
-------------

```scss
// Font
$fontFamily: 'Roboto', sans-serif;
$fontLight: 300;
$fontRegular: 400;
$fontMedium: 500;
$fontBold: 700;
$lineHeight: 1;
$fontSize: 14px;

// Colors
$black: #333;
$darkGrey: #979797;
$darkLightGrey: #bababa;
$mediumGrey: #a6a6a6;
$lightMediumGrey: #9c9c9c;
$lightGrey: #e3e3e3;
$xsLightGrey: #f5f5f5;
$mutedGrey: #808080;


$orange: #f58220;
$orangeLight: #ffa200;
$green: #04ae00;
$lightGreen: #74b67a;
$xsLightGreen: #96cc9b;

$red: #ff0000;
$pink: #de5252;
$lightPink: #ec7171;
$blue: #56819f;

// Header
$headerBg: #fff;
$top-menu-hover-bgc: #f5f5f2;

// Dropdown
$shadowDrop: 5px;

// Aside
$asideBg: #191919;
$asideWidth: 188px;
$activeLinkBg: #282828;
$activeLinkColor: #fff;
$asideMobileWidth: 60px;

// Card

$cardBg: #fff;

// title
$titleColor: #a6a6a6;
$titleFontSize: 16px;
$smallTitle: 14px;

// form-group
$formFontFamily: 'Roboto', sans-serif;
$formMargin: 15px;
$formElementWidth: 155px;
$formElementBorder: 1px solid #e3e3e3;
$formElementErrorBorder: 1px solid #ff0000;
$formElementActiveBorder: 1px solid #b1b1b1;
$formElementBorderRadius: 4px;
$formElementPadding: 14px 18px;
$formElementColor: #a6a6a6;
$formElementActiveColor: #333;
$textareaHeight: 185px;
$textareaWidth: 500px;
$textareaFZ: 12px;
$inputFZ: 14px;
$errorBorder: 2px solid $red;

// BTN

$btnPadding: 10px 25px;
$btnFontFamily: 'Roboto', sans-serif;
$btnFZ: 18px;
$btnFW: 300;
$btnBorderRadius: 4px;


// BTN Colors

$btnFontColor: #fff;
$btnGrey: #979797;
$btnGreyHover: #bababa;
$btnOrange: #f58220;
$btnOrangeHover: #ffA200;
$btnMutedBGColor: #e3e3e3;


// table

$tabeTrHover: #f1f3f3;
$tableFontSize: 13px;
$tableLinksFontSize: 17px;

// Modal
$modalBg: #fff;
```

###### Структура папок
-------------

Название папок  | Содержание файла
----------------|----------------------
app             | Директория с готовым проектом
app/css         | Готовые стили к продакшену
app/js          | Готовый js к продакшену
app/img         | Готовые картинки к продакшену
app/fonts       | Шрифты
src             | Директория с исходными файлыми
src/css         | Исходные стили, здесь мы пишем наши стили и они будут конвертироваться в app/css
src/img         | Исходные картинки, они будут минифицироваться и перегоняться в app/img
src/js          | Исходный js будет минифицироваться и переносится в app/js
src/sprite      | Папка для нарезанных картинок под будущие спрайты, после конветрации попадут в app/img

###### Используемые по модули
-------------

```js
var gulp         = require('gulp'), // Подключаем Gulp
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    spritesmith = require('gulp.spritesmith'), // Подключение библиотеки для создания спрайтов
    merge = require('merge-stream');
```

###### Все таски gulp file
-------------

```js
gulp.task('css', function(){ // Создаем таск Sass
    return gulp.src('src/css/**/*.css') // Берем источник
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});
gulp.task('sass', function () {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
}) ;
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});
gulp.task('sprite', function () { // Создаем таск sprite
    var spriteData = gulp.src('src/sprite/*.png').pipe(spritesmith({ // Настройка спрайта
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    // return spriteData.pipe(gulp.dest('app/img/')); // выгружаем спрайты в папку img
    var imgStream = spriteData.img
        .pipe(gulp.dest('app/img/'));

    var cssStream = spriteData.css
        .pipe(gulp.dest('src/css/'));

    return merge(imgStream, cssStream);
});
gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('plugins.min.js')) // Собираем их в кучу в новом файле plugins.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});
gulp.task('css-libs', ['css'], function() {
    return gulp.src('app/css/style.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});
gulp.task('watch', ['browser-sync', 'css', 'scripts', 'sprite', 'sass'], function() {
    // gulp.watch('src/css/**/*.css', ['css']); // Наблюдение за css файлами в папке css
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/sprite/*.png', ['sprite']); // Наблюдение за папкой с картинками для спрайтов  папке sprite
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
    gulp.watch('app/js/**/*.js', ['scripts']);   // Наблюдение за JS файлами в папке js
});
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquagulp.task('img', function() {
                            return gulp.src('src/img/**/*') // Берем все изображения из app
nt()]
        })))
        .pipe(gulp.dest('app/img')); // Выгружаем на продакшен
});
gulp.task('clear', function () {
    return cache.clearAll();
});
gulp.task('default', ['watch']);
```