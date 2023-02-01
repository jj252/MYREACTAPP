import { createElement} from 'react';

export function CreatedElement(names) {
    console.log('new Button Created');
    console.log(names);
    return createElement(
      'div',
      { className: 'greeting' },
      names.props + ' Hello World2'
    );
  }