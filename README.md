# React Whatsapp Hook

[![NPM version](https://img.shields.io/npm/v/react-whatsapp-hook.svg?style=flat)](https://www.npmjs.com/package/react-whatsapp-hook)
![NPM license](https://img.shields.io/npm/l/react-whatsapp-hook.svg?style=flat)

A very simple react hook to send Whatsapp messages directly from your React app.

## Installation

```
npm i react-whatsapp-hook
// OR
yarn add react-whatsapp-hook
```

## Local demo

```
git clone https://github.com/aunshx/whatsapp-messages-react
npm install && npm run start
```

## Working

Import the _useWhatsapp_ hook from 'react-whatsapp-hook'.
Pass the _mobile-number_ and _message_ to be sent to the hook and it'll open a new browser tab with the chat of the person to whom the number entered belongs to and the message you want to send.
That's it!

_Note:_ _The_ _mobile_ _number_ _should_ _contain_ _the_ _country_ _code_ _as_ _well_.

## Demo 

[Working example](https://whatsapp-react-messages.herokuapp.com/)

## Usage

```javascript
import React from 'react';
import { useWhatsapp } from 'react-whatsapp-hook';
const App = () => {
  
    // Arbitrary function for submit
    const onSubmit = () => {
        // Pass values to the hook
        useWhatsapp(message, mobileNumber)
    }

    return (
      <>
        // ------------------ Your Code ----------------------
      </>
    );
}
export default App;
```

## Examples

An example of the usefulness of the hook is given below.

Ex: Send a Whatsapp message to the specified number.

```javascript
import React, { useState } from 'react';
import { useWhatsapp } from 'react-whatsapp-hook';

const App = () => {
    
    const [formData, setFormData] = useState({
        message: '',
        mobileNumber: ''
    })

    const { message, mobileNumber } = formData

    const onChange = () => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Submit function
    const onSubmit = () => {
        // Pass the values to the hook
        useWhatsapp(message, mobileNumber)
    }

    return (
      <>
        <form onSubmit={onSubmit}>        
            <label>
                Mobile Number:
                <input type="text" value={mobileNumber} onChange={onChange} name='mobileNumber' />        
            </label>
            <label>
                Message:
                <input type="text" value={message} onChange={onChange} name='message' />        
            </label>
            <input type="submit" value="Submit" />
        </form>
      </>
    );
}
export default App;
```

## License

_react-whatsapp-hook_ is available under the MIT License.
