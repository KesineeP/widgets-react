import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import Search from './components/Search'
import Accordion from './components/Accordion';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Selec a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div >
    )
};