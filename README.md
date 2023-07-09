# Contact Book - Demo application in [Next.js](https://nextjs.org/)

The application use [Reqres API](https://reqres.in/) to get demo data.

## Steps to start

Clone or download this repository.

Run in terminal:

```base command
npm i - for install dependencies
npm run build - for building all files
npm run dev - for start development server
```

### Примечание

##### в разработке

Приложение создавалось на основе [API](https://phonebook.hillel.it/) от IT школы [Hillel](https://odessa.ithillel.ua/)

Визуальная часть основана на макете [ContactBook](<https://www.figma.com/file/tNHYKW6DCzjSOj1gNwlzGH/ContactBook-(Copy)>)

```base command
Ошибки сервера при работе с категориями:

при создании пользователя мы по умолчанию получаем три категории
["Work", "Family", "Friend"], (чувствительны к регистру)
но при попытке схоранить контакт в одну их них получаем ошибку типа
"should be equal to one of the allowed values" => allowedValues: ["mobile", "work", "home"]
поэтому стоит заранее создать одну или несколько из этих категорий
и в них сохранять контакты

старые категории удалить не получится, это второй баг сервера:
в консоли получаем ответ "успешно", в результате при новом запросе,
категория которую мы пытались удалить - осталась.
```
