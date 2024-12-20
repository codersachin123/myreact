import React from 'react';
import Card from './components/Card';


const App = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      image: '/Airpod1.jpg', 
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      image: '/Airpod3.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      image: '/Apple1.jpg',
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default App;

