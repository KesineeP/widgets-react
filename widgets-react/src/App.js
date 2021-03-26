import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import Search from './components/Search'




const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red',
        style: {
            color: 'red'
        }
    },
    {
        label: 'The Color Green',
        value: 'green',
        style: {
            color: 'green'
        }
    },
    {
        label: 'A shade of Blue',
        value: 'blue',
        style: {
            color: 'blue'
        }

    }
]
export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button style={{ float: 'right', margin: '20px' }} onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {
                showDropdown ?
                    <Dropdown
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                    : null
            }
        </div >
    )
};