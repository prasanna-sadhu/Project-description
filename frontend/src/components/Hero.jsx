import { useNavigate } from "react-router-dom";

import Button from "./ui/Button";

function Hero() {

const navigate = useNavigate();

return (

<section className="hero">

<h1>

AI Product Description Generator

</h1>

<p>

Creating a professional e-commerce description generator for food products.

</p>

<Button

onClick={() => navigate("/generator")}

>

Generate Description

</Button>

</section>

);

}

export default Hero;