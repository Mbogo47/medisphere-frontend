import { FaAmbulance, FaChevronRight, FaHeartbeat, FaNotesMedical, FaPills, FaProcedures, FaUserMd } from "react-icons/fa";
import Services from './Services.jsx';
import './services.css';

const Servcont = () => {
    return (
        <div className="section" id='services'>
            <h3 className="heading"> our services</h3>
            <div className="box-container">
                <Services icon={<FaNotesMedical />} heading='free check ups' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="icon-right" />} />
                <Services icon={<FaAmbulance />} heading='24/7 ambulance' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="icon-right" />} />
                <Services icon={<FaUserMd />} heading='expert doctors' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="icon-right" />} />
                <Services icon={<FaPills />} heading='medicines' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="icon-right" />} />
                <Services icon={<FaProcedures />} heading='bed facility' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="icon-right" />} />
                <Services icon={<FaHeartbeat />} heading='totalcare' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="icon-right" />} />

            </div>
        </div>
    );
}

export default Servcont;
