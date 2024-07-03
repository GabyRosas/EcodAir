import React from "react";
import {SectionTotalContainer, SectionMeter, MeterImage, SectionInfo, ContainerGood, ContainerModerate, ContainerSensitive,ContainerUnhealthy, ContainerVeryUnhealthy, ContainerHazardous} from "./ColorsMeter.scss"

import MeterImage from "../../assets/images/meter.png"
    


const ColorsMeter = () => {
    return (
        <>
<SectionTotalContainer>

<SectionMeter>
<ImageMeter src = {MeterImage} alt = "ImageMeter" />
</SectionMeter>

<SectionInfo>

<ContainerGood>
<Description>
    Air quality is considereded satisfactory.
</Description>
</ContainerGood>

<ContainerModerate>
    <Description>
Air quality is acceptable; however, a very small number of people who are unusually sensitive to air pollution.
    </Description>
</ContainerModerate>


<ContainerSensitive>
    <Description>
Members of sensitive groups may experience health effects.
    </Description>
</ContainerSensitive>


<ContainerUnhealthy>
    <Description>
        Everyone may experience more serious health effects
    </Description>
</ContainerUnhealthy>


<ContainerVeryUnhealthy>
    <Description>
        Everyone may experience more serious health effects.
    </Description>
</ContainerVeryUnhealthy>

<ContainerHazardous>
    <Description>
Health warnings of emergency conditions. The entire population is more likely to be affected.
    </Description>
</ContainerHazardous>


</SectionInfo>

</SectionTotalContainer>

</>
    );
}

export default ColorsMeter;