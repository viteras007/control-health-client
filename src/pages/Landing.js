import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Health <span>tracker</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            leo vel felis fermentum feugiat. Aliquam elementum turpis eget neque
            consequat mattis. Donec facilisis quis justo id accumsan. Integer
            sed auctor lectus, non pretium arcu. Fusce elementum sapien id urna
            volutpat placerat. Proin tincidunt ringilla mi. In semper, arcu
            sagittis finibus tristique, ellus est ultricies turpis, vitae
            faucibus erat sem vitae lectus. Proin eget augue diam.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />;
      </div>
    </Wrapper>
  );
};

export default Landing;
