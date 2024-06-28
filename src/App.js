// import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import avatar from './avatar.jpeg';
import ProfileName from './components/ProfileName';
import Location from './components/Location';
import Description from './components/Description';
import SourceButton from './components/SourceButton';
// import Image from '../social-links-profile-main/social-links-profile-main/assets/images/avatar-jessica.jpeg'

function App() {
  return (
    <div className="App">
      <div className="design-div">
        <Image src = {avatar}/>
        <ProfileName name = "Jesicca Rendal"/>
        <Location loc= "London, United Kingdom"/>
        <Description desc="Frontend dev and avid reader"/>
        <SourceButton buttonText="GitHub"/>
        <SourceButton buttonText="Frontend Mentor"/>
        <SourceButton buttonText="LinkedIn"/>
        <SourceButton buttonText="Twitter"/>
        <SourceButton buttonText="Instagram"/>

      </div>
    </div>
  );
}

export default App;
