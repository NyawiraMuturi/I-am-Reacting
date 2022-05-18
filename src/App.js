
import Comments from './Components/Comments';
import pic1 from './img/babe.jpeg'
import pic2 from './img/gent.jpeg'
import pic3 from './img/ladygent.jpeg'

function App() {


  return (
    <div>
      <Comments
        name='Anne'
        date='7:00PM' 
        comment='I would like to suck your dick Alex'
        pic={pic1}/>

      <Comments 
      name='James' 
      date='6:15PM' 
      comment='Guys, get a room'
      pic={pic2}/>

      <Comments 
      name='Alex' 
      date='9:00AM' 
      comment='Come Gimme baby'
      pic={pic3}/>
    </div>
  );
}

export default App;
