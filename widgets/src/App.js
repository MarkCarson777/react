import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers'
  },
  {
    title: 'How do you use ReactDOM?',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
];

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
}

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
}

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
}

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
}

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// };

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
      {/* {showDropdown ? */}
      {/*   <Dropdown  */}
      {/*     selected={selected} */}
      {/*     onSelectedChange={setSelected}  */}
      {/*     options={options}  */}
      {/*    /> : null */}
      {/* } */}
    </div>
  )
};