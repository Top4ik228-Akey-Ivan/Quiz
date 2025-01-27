import cssLogo from '../assets/css-3.png'
import jsLogo from '../assets/js.png'
import reactLogo from '../assets/logo.svg'
import reduxLogo from '../assets/redux.png'

export interface IQuize {
    name: string;
    logo: string;
}

export interface IAnswer {
    text: string; // текст ответа
    isCorrect: boolean; // является ли ответ правильным
}

export interface IQuestion {
    id: number;
    text: string;
    answers: IAnswer[]; // массив ответов
}

export interface IQuestions {
    Css: IQuestion[];
    JavaScript: IQuestion[];
    React: IQuestion[];
    Redux: IQuestion[];
}

export const Quizes: IQuize[] = [
    { name: 'Css', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Redux', logo: reduxLogo },
];

export const questions: IQuestions = {
    Css: [
        {
            id: 1,
            text: 'Какой из следующих свойств используется для изменения цвета текста в CSS?',
            answers: [
                { text: 'background-color', isCorrect: false },
                { text: 'color', isCorrect: true }, // правильный ответ 
                { text: 'font-size', isCorrect: false },
                { text: 'text-decoration', isCorrect: false }
            ]
        },
        {
            id: 2,
            text: 'Какой селектор используется для выбора всех элементов с классом "example"?',
            answers: [
                { text: '.example', isCorrect: true }, // правильный ответ 
                { text: '#example', isCorrect: false },
                { text: 'example', isCorrect: false },
                { text: '*example', isCorrect: false }
            ]
        },
        {
            id: 3,
            text: 'Какой из следующих методов используется для создания градиента в CSS?',
            answers: [
                { text: 'linear-gradient()', isCorrect: true }, // правильный ответ
                { text: 'radial-gradient()', isCorrect: false },
                { text: 'gradient()', isCorrect: false },
                { text: 'color-gradient()', isCorrect: false }
            ]
        },
        {
            id: 4,
            text: 'Что делает свойство "display: none"?',
            answers: [
                { text: 'Скрывает элемент, но сохраняет его место в документе.', isCorrect: false },
                { text: 'Скрывает элемент и удаляет его из потока документа.', isCorrect: true }, // правильный ответ
                { text: 'Отображает элемент как блочный.', isCorrect: false },
                { text: 'Изменяет цвет элемента.', isCorrect: false }
            ]
        },
        {
            id: 5,
            text: 'Какой атрибут используется для подключения внешнего файла стилей к HTML-документу?',
            answers: [
                { text: '<link>', isCorrect: true }, // правильный ответ
                { text: '<style>', isCorrect: false },
                { text: '<css>', isCorrect: false },
                { text: '<script>', isCorrect: false }
            ]
        }
    ],
    JavaScript: [
        {
            id: 1,
            text: 'Какой метод используется для добавления элемента в конец массива?',
            answers: [
                { text: 'push()', isCorrect: true }, // правильный ответ 
                { text: 'pop()', isCorrect: false },
                { text: 'shift()', isCorrect: false },
                { text: 'unshift()', isCorrect: false }
            ]
        },
        {
            id: 2,
            text: 'Что такое "hoisting" в JavaScript?',
            answers: [
                { text: 'Поднятие переменных и функций в верхнюю часть их области видимости.', isCorrect: true }, // правильный ответ 
                { text: 'Процесс компиляции кода.', isCorrect: false },
                { text: 'Синхронизация асинхронного кода.', isCorrect: false },
                { text: 'Оптимизация производительности.', isCorrect: false }
            ]
        },
        {
            id: 3,
            text: 'Какой оператор используется для сравнения значений и типов в JavaScript?',
            answers: [
                { text: '==', isCorrect: false },
                { text: '===', isCorrect: true }, // правильный ответ
                { text: '!=', isCorrect: false },
                { text: '!==', isCorrect: false }
            ]
        },
        {
            id: 4,
            text: 'Что такое "closure" в JavaScript?',
            answers: [
                { text: 'Функция, которая имеет доступ к переменным внешней функции даже после завершения этой функции.', isCorrect: true }, // правильный ответ                
                { text: 'Объект, который закрывает все переменные.', isCorrect: false },
                { text: 'Синтаксис для создания новых объектов.', isCorrect: false },
                { text: 'Метод, который закрывает браузерное окно.', isCorrect: false }
            ]
        },
        {
            id: 5,
            text: 'Какой метод используется для преобразования JSON-строки в объект JavaScript?',
            answers: [
                { text: 'JSON.parse()', isCorrect: true }, // правильный ответ
                { text: 'JSON.stringify()', isCorrect: false },
                { text: 'JSON.object()', isCorrect: false },
                { text: 'JSON.convert()', isCorrect: false }
            ]
        }
    ],
    React: [
        {
            id: 1,
            text: 'Какой метод жизненного цикла вызывается сразу после монтирования компонента?',
            answers: [
                { text: 'componentDidMount()', isCorrect: true }, // правильный ответ 
                { text: 'componentWillMount()', isCorrect: false },
                { text: 'render()', isCorrect: false },
                { text: 'componentDidUpdate()', isCorrect: false }
            ]
        },
        {
            id: 2,
            text: 'Какой хук используется для управления состоянием в функциональных компонентах?',
            answers: [
                { text: 'useEffect', isCorrect: false },
                { text: 'useState', isCorrect: true }, // правильный ответ 
                { text: 'useReducer', isCorrect: false },
                { text: 'useContext', isCorrect: false }
            ]
        },
        {
            id: 3,
            text: 'Какой метод используется для обновления состояния в классовых компонентах?',
            answers: [
                { text: 'setState()', isCorrect: true }, // правильный ответ
                { text: 'updateState()', isCorrect: false },
                { text: 'changeState()', isCorrect: false },
                { text: 'modifyState()', isCorrect: false }
            ]
        },
        {
            id: 4,
            text: 'Какой атрибут используется для передачи данных от родительского компонента к дочернему в React?',
            answers: [
                { text: 'state', isCorrect: false },
                { text: 'props', isCorrect: true }, // правильный ответ
                { text: 'data', isCorrect: false },
                { text: 'context', isCorrect: false }
            ]
        },
        {
            id: 5,
            text: 'Что делает метод render() в React?',
            answers: [
                { text: 'Отображает UI компонента.', isCorrect: true }, // правильный ответ
                { text: 'Создает новый компонент.', isCorrect: false },
                { text: 'Обновляет состояние компонента.', isCorrect: false },
                { text: 'Инициализирует жизненный цикл компонента.', isCorrect: false }
            ]
        }
    ],
    Redux: [
        {
            id: 1,
            text: 'Что такое Redux?',
            answers: [
                { text: 'Библиотека для управления состоянием приложения.', isCorrect: true }, // правильный ответ
                { text: 'Фреймворк для создания UI.', isCorrect: false },
                { text: 'Язык программирования.', isCorrect: false },
                { text: 'Инструмент для тестирования приложений.', isCorrect: false }
            ]
        },
        {
            id: 2,
            text: 'Какой метод используется для создания хранилища в Redux?',
            answers: [
                { text: 'createStore()', isCorrect: true }, // правильный ответ
                { text: 'createReducer()', isCorrect: false },
                { text: 'createAction()', isCorrect: false },
                { text: 'configureStore()', isCorrect: false }
            ]
        },
        {
            id: 3,
            text: 'Что такое "action" в Redux?',
            answers: [
                { text: 'Объект, описывающий изменение состояния.', isCorrect: true }, // правильный ответ                
                {text:'Функция, изменяющая состояние.', isCorrect:false},
                { text: 'Компонент, отображающий данные.', isCorrect: false },
                { text: 'Метод для получения состояния.', isCorrect: false }
            ]
        },
        {
            id: 4,
            text: 'Что такое "reducer" в Redux?',
            answers: [
                { text: 'Функция, которая принимает текущее состояние и действие и возвращает новое состояние.', isCorrect: true }, // правильный ответ
                { text: 'Объект, содержащий все состояния приложения.', isCorrect: false },
                { text: 'Метод для создания действий.', isCorrect: false },
                { text: 'Компонент, который отображает состояние.', isCorrect: false }
            ]
        },
        {
            id: 5,
            text: 'Какой метод используется для отправки действия в Redux?',
            answers: [
                { text: 'dispatch()', isCorrect: true }, // правильный ответ
                { text: 'sendAction()', isCorrect: false },
                { text: 'emit()', isCorrect: false },
                { text: 'invoke()', isCorrect: false }
            ]
        }
    ],
};

