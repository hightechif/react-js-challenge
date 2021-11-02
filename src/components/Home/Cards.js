import CardItem from './CardItem';

function Card() {
  return (
    <div className='cards_home' id='portfolios'>
      <h1>Check out these EPIC Portfolios!</h1>
      <div className='cards_home__container'>
        <div className='cards_home__wrapper'>
          <ul className='cards_home__items'>
            <CardItem
              src='images/project-1.png'
              text='Landing Page with Rock Paper Scissors Game and CRUD Dashboard'
              label='HTML CSS Bootstrap'
              path='//binar-challenge.herokuapp.com/'
              source='//github.com/ridhanf/binar-portfolio/'
            />
            <CardItem
              src='images/project-2.png'
              text='Simple CRUD App for Articles Management'
              label='NodeJS Express PostgreSQL Sequelize'
              path='//fadhil-node-crud.herokuapp.com/articles'
              source='//github.com/ridhanf/node-sequelize-CRUD/'
            />
          </ul>
          <ul className='cards_home__items'>
            <CardItem
              src='images/project-3.png'
              text='Simple Rock Paper Scissors Game'
              label='HTML CSS JavaScript'
              path='//binar-challenge.herokuapp.com/game'
              source='//github.com/ridhanf/binar-portfolio/'
            />
            <CardItem
              src='images/project-4.png'
              text='Simple CRUD Dashboard for Users Management'
              label='NodeJS Express PostgreSQL Sequelize'
              path='//binar-challenge.herokuapp.com/dashboard'
              source='//github.com/ridhanf/binar-portfolio/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card;
