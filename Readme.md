![](https://img.shields.io/npm/v/react-native-simple-logger.svg?style=flat)
![](https://img.shields.io/npm/dt/react-native-simple-logger.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# react-native-simple-logger


A simple React-Native logger to log outputs to make debugging easy in ``Chrome Debugger``.

It automatically disables the ``console.log`` if it is not the production environment.


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
    text: The output to be shown
    expandJson: If the putput to be shown is ```JSON object```, the ```JSON object``` would be expanded by using ```JSON.stringify().replace()``` method


- **logger.log(text)**

    **text:** The output to be shown

    If only ```text``` is provided, the default heading would be ```"LOG"```

    The default value for ```expandJson``` is ```false```



| logger.log('I am a log')      | logger.log(null, data, true)   | logger.log('User data is: ', data, true) |
| ----------------------------- | ------------------------------ | ---------------------------------------- |
| ![](assets/logger.log(1).png) | ![](assets/logger.log(2).png)  | ![](assets/logger.log(3).png)            |


## 2. logger.error

Usage:
- **logger.error(header, text)**

    **header:** The header to be shown as heading of the output

    **text:** The output to be shown
    
- **logger.error(text)**

    **text:** The output to be shown

    If only ```text``` is provided, the default heading would be ```"ERROR"```


| logger.error('error is: ', 'I am an error')  | logger.error('I am an error')  |
| ------------------------------------------   | ------------------------------ |
| ![](assets/logger.error(1).png)              | ![](assets/logger.error(2).png)  |


## 3. logger.apiError

Usage:
- **logger.apiError(header, text)**

    **header:** The header to be shown as heading of the output
    
    **text:** The output to be shown
    
- **logger.apiError(text)**

    **text:** The output to be shown

    If only ```"text"``` is provided, the default heading would be ```"API ERROR"```

    This method is made to log the API error for the ```"axios"```. The error details would contain the error status code, url, error response etc.


| logger.apiError(error)             |     logger.apiError(error)          | logger.apiError('add post error:', error) |
| ---------------------------------- | ----------------------------------- | ----------------------------------------- |
| ![](assets/logger.apiError(1).png) | ![](assets/logger.apiError(2).png)  | ![](assets/logger.apiError(3).png)        |

## 4. logger.data

Usage:
- **logger.data(header, text, noJsonExpand)**

    **header:** The header to be shown as heading of the output
    
    **text:** The output to be shown
    noJsonExpand: A boolean indicating wether to expand the JSON output into more clearer view
    
- **logger.data(text)**

    **text:** The output to be shown

    If only ```"text"``` is provided, the default heading would be "DATA"
    The default value for ```noJsonExpand``` is ```false``` i.e. the output would be expanded

| logger.data('User data is:', data) | logger.data('User data is:', data, true) |   logger.data(data)            |
| ---------------------------------- | ----------------------------------------- | ------------------------------ |
| ![](assets/logger.data(1).png)     | ![](assets/logger.data(2).png)            | ![](assets/logger.data(3).png) |
