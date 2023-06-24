import "./GoBackHeader.css";
import { useLocation, useNavigate } from "react-router-dom";
import arrow from "../../assets/img/arrow.png"

const GoBackHeader = props => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1); // zurueck zur vorherigen page
	};

	const currentLocation = useLocation().pathname;
	const path =  "/details/"+props.id;

	return (
		<div className='go-back-header'>
			<button onClick={() => currentLocation == path?  goBack() : props.setOpen?props.setOpen(false) : null}>
				<img src={arrow} alt='go-back' />
			</button>
			<div>
				<p>{props.text}</p>
				{props.summe?<span>{props.summe}€</span>:<></>}
			</div>
		</div>
	);
};

export default GoBackHeader;
