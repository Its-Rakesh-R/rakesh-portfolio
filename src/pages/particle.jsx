import Particles from "react-tsparticles"
import Particleconfig from "./particle-config"
import { loadFull } from "tsparticles";

function Particleback(){
    const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
    return<>
    <Particles params={Particleconfig} id="tsparticles" init={particlesInit} loaded={particlesLoaded}>

    </Particles>
    </>

}
export default Particleback