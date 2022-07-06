import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom"
import "./LandingPage.css";
import { useAuth } from "../../context";
const LandingPage = () => {
    const navigate  =  useNavigate()
   const {auth}=useAuth()
  return (
    <div className="landingpage">
      <div className="landingpage__img">
        <img src="https://i.pcmag.com/imagery/lineups/01w4qkVv8jr5A35PW87Phed-1.fit_lim.size_768x432.v1569492924.jpg" />
      </div>
      <div className="landingpage__content">
        <h1 className="lp__heading">METANOTE</h1>

        <h1>Let's get Introduced With MetaNote</h1>
        <h3>
          One stop solution for your daily notes, routines, tasks, Time Tables etc. Give it a try to optimise your efficiency. 
        </h3>

        <button class="btn btn_solid-primary btn_primary" onClick={()=>navigate("/signup")} >{auth.token ?"Go to Notes":"Join Now"}</button>
        <div class="lp__desp-account " onClick={()=>navigate("/login")}>Already have an account ?</div>
      </div>
      
      <Footer />
    </div>
  );
};
export { LandingPage };