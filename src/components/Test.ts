import { createElement, createFragment } from '../core/CreateElement';
import useState from '../core/Hooks';
import Test2 from './Test2';

const [getCount, setCount] = useState(1);
let count = getCount();

function Test($target: Element) {
  const handleClick = () => {
    setCount(count + 1);
    count = getCount();
    render();
  };

  const render = () => {
    const test2_pos = createElement('div', {});
    new Test2(test2_pos);

    const template = createFragment(
      createElement('h2', { class: 'H2' }, `This is Test ${count}`),
      createElement(
        'button',
        {
          onclick: handleClick,
        },
        'Test1',
      ),
      test2_pos,
    );
    $target.replaceChildren(template);
  };

  render();
}

export default Test;
