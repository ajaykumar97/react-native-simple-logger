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
| ![](https://imgur.com/7TndXRG) | ![](https://imgur.com/qWcnjxT)  | ![](https://imgur.com/fPhsIT1)            |


## 2. logger.error

Usage:
- **logger.error(header, text, expandJson)**

    **header:** The header to be shown as heading of the output

    **text:** The output to be shown

    **expandJson:** If the output to be shown is ```JSON object```, the ```JSON object``` would be expanded by using ```JSON.stringify().replace()``` method
    
- **logger.error(text)**

    **text:** The output to be shown

    If only ```text``` is provided, the default heading would be ```"ERROR"```


| logger.error('error is: ', 'I am an error')  | logger.error('I am an error')  | logger.error(data, null, true)  |
| ------------------------------------------   | ------------------------------ | ------------------------------ |
| ![](https://imgur.com/NmqUr8N)               | ![](https://imgur.com/W38WqCJ) | ![](https://imgur.com/j9R6naU) |


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
| ![](https://imgur.com/vvFuPvu)     | ![](https://imgur.com/cHQQ0hE)            |

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

| logger.data('User data is:', data) | logger.data('User data is:', data, true) |   logger.data(data)            |
| ---------------------------------- | ----------------------------------------- | ------------------------------ |
| ![](https://imgur.com/w5eVPW4)     | ![](https://imgur.com/YAzQnIQ)            | ![](https://imgur.com/9NJcqTG) |
