import './App.css';
import Item from './item';
const date = new Date();
const employeeList = [
  {
    firstName: 'Pepa',
    secondName: 'Pepova',
    parentName: 'Pepovna',
    position: 'Specialist',
    sector: 'Development department',
    serviceNumber: 18405254,
    phone: '+33–1–7654321',
    mobilePhone: '8-999-999-00-00',
    mail: 'pepa@yandex.ru',
    image:
      'https://www.dictionary.com/e/wp-content/uploads/2018/03/Pepe-the-Frog.jpg',
    events: [
      {
        id: 123,
        category: 'Командировка',
        startDate: '23.08.2023',
        endDate: '26.08.2023',
      },
      {
        id: 345,
        category: 'Отпуск за свой счет',
        startDate: '27.08.2023',
        endDate: '27.08.2023',
      },
      {
        id: 678,
        category: 'Встреча',
        startDate: '28.08.2023',
        endDate: '30.09.2023',
      },
    ],
  },
  {
    firstName: 'Pep',
    secondName: 'Pepov',
    parentName: 'Pepovich',
    position: 'Specialist 1 category',
    sector: 'Development department',
    serviceNumber: 18405254,
    phone: '+33–1–1234567',
    mobilePhone: '8-999-999-11-11',
    mail: 'pepa@yandex.ru',
    image:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
    events: [
      {
        id: 123,
        category: 'Обучение',
        startDate: '27.08.2023',
        endDate: '02.09.2023',
      },
    ],
  },
];

const renderItemsOfList = employeeList.map((el, i) => {
  return <Item key={i} item={el} />;
});

function App() {
  return (
    <div className='App'>
      <ul className='App__list'>{renderItemsOfList}</ul>
      <img src=''></img>
    </div>
  );
}

export default App;
