# Bonjour Croissant

Витрина пекарни/кофейни на React — каталог по категориям (круассаны, кофе, выпечка, торты), карточки товаров с корзиной и главный баннер.

## Стек

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) — роутинг
- [Tailwind CSS](https://tailwindcss.com/) — стили
- [react-hot-toast](https://react-hot-toast.com/) — уведомления

## Структура

```
client/
  src/
    assets/       # иконки и картинки интерфейса
    data/         # dummy-данные: товары, категории, футер
    context/      # AppContext — пользователь, корзина, продукты
    components/   # переиспользуемые UI-компоненты
    pages/        # страницы (маршруты)
```

Сейчас реализован только маршрут `/` (`Home`). Ссылки в навигации на `/products`, `/cart`, `/my-orders` ведут в никуда — страницы ещё не созданы.

## Запуск локально

```bash
cd client
npm install
npm run dev
```

Приложение поднимется на `http://localhost:5173`.

### Переменные окружения

Создать `client/.env`:

```
VITE_CURRENCY=KZT
```

## Скрипты

Все запускаются из папки `client/`:

- `npm run dev` — dev-сервер с HMR
- `npm run build` — production-сборка
- `npm run lint` — ESLint
- `npm run preview` — предпросмотр production-сборки
