import Footer from "./components/Home/Footer";
import HomeHero from "./components/Home/HomeHero";
import Homesec1 from "./components/Home/Homesec1";
import Homesec2 from "./components/Home/Homesec2";
import Homesec3 from "./components/Home/Homesec3";
import Homesec4 from "./components/Home/Homesec4";
import Promotion from "./components/Home/Promotion";


export default function Home() {
  return (
    <main className="">
      <div className="w-full flex flex-col justify-center lg:px-[50px] xl:px-[64px] /items-center /bg-[url(/bg-liness.svg)]">
        <div>
          <HomeHero></HomeHero>
          <Homesec1></Homesec1>
          <Homesec2></Homesec2>
          <Homesec3></Homesec3>
        </div>
      </div>
      <Homesec4></Homesec4>
      <Promotion></Promotion>
      <Footer></Footer>
    </main>
  );
}
