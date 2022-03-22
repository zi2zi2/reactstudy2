import logo from './logo.svg';
import './App.css';
import Card1 from './Card1.jsx'
import Card2 from './Card2.jsx'
import Card3 from './Card3.jsx'
import Card4 from './Card4.jsx'
import Card5 from './Card5.jsx'
import Card6 from './Card6.jsx'

// import ClickTest from './ClickTest.jsx'
// import Header from './Header.jsx'
// import Footer from './Footer.jsx'

function App() {
  return (
    
    <div className="App">
      {/* <Header/>
      <ClickTest value={1}/>
      <Footer/> */}
      <Card1 title='Inline Style' children='child'/>
      <Card2 title='그냥 CSS' children='child'/>
      <Card3 title='CSS Module' children='child'/>
      <Card4 title='CSS in JS1' children='child'/>
      <Card6 title='CSS in JS2' children='child'/>
      <Card5 title='전처리기' children='child'/>

    </div>
  );
}

export default App;
