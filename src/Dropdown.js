import './style.css';

const Dropdown = function dropDownList(
  title = 'Drop-down',
  items = [
    {
      title: 'Item 1',
      callback: () => {},
    },
    {
      title: 'Item 2',
      callback: () => {},
    },
    {
      title: 'Item 3',
      callback: () => {},
    },
  ],
  customClass = '',
) {
  const createListItem = (data) => {
    const item = document.createElement('div');
    item.classList.add('dd__item');
    item.textContent = data.title;
    if (Object.prototype.hasOwnProperty.call(data, 'callback')) {
      item.addEventListener('click', data.callback);
    }

    return item;
  };

  const render = () => {
    // Container
    const container = document.createElement('div');
    container.classList.add('dd');

    // Apply custom CSS class if provided
    if (customClass !== '') {
      container.classList.add(customClass);
    }

    // Button
    const button = document.createElement('div');
    button.classList.add('dd__btn');
    button.textContent = title;
    container.appendChild(button);

    // List
    const list = document.createElement('div');
    list.classList.add('dd__list', 'hidden');
    container.appendChild(list);
    items.forEach((item) => list.appendChild(createListItem(item)));

    button.addEventListener('click', () => list.classList.toggle('hidden'));

    return container;
  };

  return render();
};

export default Dropdown;
