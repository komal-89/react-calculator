import Screen from './components/Screen';
import Cart from './components/Cart';

import './App.css';
import Button from './components/Button';
import { useState } from 'react';
import { evaluate } from 'mathjs';

const App = () => {
    const [value, setValue] = useState('');
    const btnValues = [
        [1, 2, 3, '/'],
        [5, 6, 7, '*'],
        [8, 9, 0, '-'],
        ['+', '.', '=']
    ];

    const handleClick = (val) => {
        if (val !== '=') {
            setValue((prevValue) => prevValue + val);
        } else {
            try {
                setValue(evaluate(value));
            } catch (error) {
                setValue('');
            }
        }
    };

    return (
        <div className="container">
            <h1>calculator</h1>
            <Screen value={value} />
            {btnValues.map((row, index) => (
                <div className="row" key={index}>
                    {row.map((value) => (
                        <Button
                            key={value}
                            text={value}
                            style="btn"
                            handleClick={() => handleClick(value)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default App;
