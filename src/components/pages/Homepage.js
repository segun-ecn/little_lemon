import Heading from './MainHeading';
import Specials from "./Specials";
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />

        <CustomersSay />

        <Chicago />
      </main>
    </>
  );
}

export default Homepage;