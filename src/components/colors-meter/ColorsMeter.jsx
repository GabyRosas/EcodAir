import React from "react";
import "./ColorsMeter.scss"
import Meter from "../../assets/images/meter.png";


const ColorsMeter = () => {
    return (
        <>


<div className='container'>
 <div div className='image-container'>
<img src = {Meter} alt = "Meter" />
</div>


<div className='bars-container'>
<div className='bar good'>Air quality is considereded satisfactory.</div>
<div className='bar moderate'>Air quality is acceptable; however, a very small number of people who are unusually sensitive to air pollution.</div>
<div className='bar sensitive'>Members of sensitive groups may experience health effects.</div>
<div className='bar unhealthy'>Everyone may experience begin to experience health effects</div>
<div className='bar very-unhealthy'>Everyone may experience more serious health effects.</div>
<div className='bar hazardous'>Health warnings of emergency conditions. The entire population is more likely to be affected.</div>
</div>
</div>



</>
    );
}

export default ColorsMeter;