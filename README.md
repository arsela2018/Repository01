# React Whatsapp Component

[![NPM version](https://img.shields.io/npm/v/react-whatsapp-hook.svg?style=flat)](https://www.npmjs.com/package/react-whatsapp-hook)
![NPM license](https://img.shields.io/npm/l/react-whatsapp-hook.svg?style=flat)

A very simple react component to send Whatsapp messages directly from your React app.

## Installation

```
npm i react-whatsapp-component
// OR
yarn add react-whatsapp-component
```

## Working

Import the _UseWhatsapp_ component from 'react-whatsapp-component'.
Pass the _mobile-number_ and _message_ to be sent to the component and it'll open a new browser tab with the chat of the person to whom the number entered belongs to and the message you want to send.
That's it!

_Note:_ _The_ _mobile_ _number_ _should_ _contain_ _the_ _country_ _code_ _as_ _well_.
_eg:_ _If_ _the_ _number_ _is_ _from_ _India:_ +91 XXXXX XXXXX

## Demo 

[Working example](https://whatsapp-react-messages.herokuapp.com/)

## Usage

```javascript
import React from 'react';
import UseWhatsapp from 'react-whatsapp-component'

const App = () => {
  
    // Arbitrary function for submit
    const onSubmit = () => {
        // Pass values to the component
        UseWhatsapp(message, mobileNumber)
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

An example of the usefulness of the component is given below.

Ex: Send a Whatsapp message to the specified number.

```javascript
import React, { useState } from 'react';
import UseWhatsapp from 'react-whatsapp-component'

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
        // Pass the values to the component
        UseWhatsapp(message, mobileNumber)
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

_react-whatsapp-component_ is available under the MIT License.
