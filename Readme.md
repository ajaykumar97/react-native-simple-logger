[![](https://img.shields.io/npm/v/react-native-simple-logger.svg?style=flat)](https://www.npmjs.com/package/react-native-simple-logger)
[![](https://img.shields.io/npm/dt/react-native-simple-logger.svg)](https://www.npmjs.com/package/react-native-simple-logger)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# react-native-simple-logger


A simple React-Native logger to log outputs to make debugging easy in ``Chrome Debugger``.

It automatically disables the ``console.log`` if it is not in the production environment.


## Installation

If using yarn:

```
yarn add react-native-simple-logger
```

If using npm:

```
npm i react-native-simple-logger
```

## Usage

```
import logger from 'react-native-simple-logger';
```
Simply change

```
console.log('I am a log');

```
to

```
logger.log('I am a log');

```

It has different methods to log the out:

## 1. logger.log

Usage:

let ``data`` object be:

```
const data = {
   id: 1,
   email: 'test@gmail.com',
   name: 'test'
}
```

- **logger.log(header, text, expandJson)**

    **header:** The header to be shown as heading of the output

    **text:** The output to be shown

    **expandJson:** If the output to be shown is ```JSON object```, the ```JSON object``` would be expanded by using ```JSON.stringify().replace()``` method


- **logger.log(text)**

    **text:** The output to be shown

    If only ```text``` is provided, the default heading would be ```"LOG"```

    The default value for ```expandJson``` is ```false```

| logger.log('I am a log')      | logger.log(null, data, true)   | logger.log('User data is: ', data, true) |
| ----------------------------- | ------------------------------ | ---------------------------------------- |
| ![logger.log('I am a log')](https://user-images.githubusercontent.com/38132295/87564992-b0d4d900-c6de-11ea-9511-545a8c3e92c0.png) | ![logger.log(null, data, true)](https://user-images.githubusercontent.com/38132295/87565122-db269680-c6de-11ea-9f12-b003c0201188.png) | ![logger.log('User data is: ', data, true)](https://user-images.githubusercontent.com/38132295/87565219-fc878280-c6de-11ea-94c0-ba5c857a5ddf.png) |

## 2. logger.error

Usage:
- **logger.error(header, text)**

    **header:** The header to be shown as heading of the output

    **text:** The output to be shown
    
- **logger.error(text)**

    **text:** The output to be shown

    If only ```text``` is provided, the default heading would be ```"ERROR"```


| logger.error('error is: ', 'I am an error') | logger.error('I am an error')  | logger.error(data, null, true) |
| ------------------------------------------  | ------------------------------ | ------------------------------ |
| ![logger.error('error is: ', 'I am an error')](https://user-images.githubusercontent.com/38132295/87570806-c8b05b00-c6e6-11ea-9767-e34a008eea96.png) | ![logger.error('I am an error')](https://user-images.githubusercontent.com/38132295/87570851-da91fe00-c6e6-11ea-8178-bd0b4b04a73c.png) | ![logger.error(data, null, true)](https://user-images.githubusercontent.com/38132295/87572607-6d339c80-c6e9-11ea-91c3-c1fbd2b76de4.png) |


## 3. logger.apiError

Usage:
- **logger.apiError(header, text)**

    **header:** The header to be shown as heading of the output
    
    **text:** The output to be shown
    
- **logger.apiError(text)**

    **text:** The output to be shown

    If only ```"text"``` is provided, the default heading would be ```"API ERROR"```

    This method is made to log the API error for the ```"axios"```. The error details would contain the error status code, url, error response etc.

Let ``api request`` be:


```
axios({
    url: 'https://jsonplaceholder.typicode.com/post',
    method: 'post',
    data: {
        title: 'foo',
        body: 'bar',
    },
})
    .then((response) => logger.data('add post response is: ', response.data))
    .catch((error) => logger.apiError('add post error:', error));
```

Here I have passed the incorrect url ``https://jsonplaceholder.typicode.com/post``, which should be ``https://jsonplaceholder.typicode.com/posts``.

The error will be something like as shown in the 3rd column image below:

| logger.apiError(error)             | logger.apiError('add post error:', error) |
| ---------------------------------- | ----------------------------------------- |
| ![logger.apiError(error)](https://user-images.githubusercontent.com/38132295/87573135-25614500-c6ea-11ea-9601-a494f93be171.png) | ![logger.apiError('add post error:', error)](https://user-images.githubusercontent.com/38132295/87573303-56417a00-c6ea-11ea-995c-86fb099bf81a.png) |

## 4. logger.data

Usage:
- **logger.data(header, text, noJsonExpand)**

    **header:** The header to be shown as heading of the output
    
    **text:** The output to be shown
    
    **noJsonExpand:** A boolean indicating wether to expand the JSON output into more clearer view
    
- **logger.data(text)**

    **text:** The output to be shown

    If only ```"text"``` is provided, the default heading would be "DATA"
    The default value for ```noJsonExpand``` is ```false``` i.e. the output would be expanded

| logger.data('User data is:', data) | logger.data('User data is:', data, true)  |   logger.data(data)            |
| ---------------------------------- | ----------------------------------------- | ------------------------------ |
| ![logger.data('User data is:', data)](https://user-images.githubusercontent.com/38132295/87573412-7ffaa100-c6ea-11ea-8fd3-51979129f04c.png) | ![logger.data('User data is:', data, true)](https://user-images.githubusercontent.com/38132295/87573521-a7516e00-c6ea-11ea-9657-9b8afd7a5658.png) | ![logger.data(data)](https://user-images.githubusercontent.com/38132295/87575859-2c8a5200-c6ee-11ea-8e42-20cac0d50558.png) |

## License

[MIT](LICENSE)
