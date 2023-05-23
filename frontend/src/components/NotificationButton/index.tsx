import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';
import axios from 'axios';

type Props = {
    saleId: number;
}

function NotificationButton( {saleId} : Props) {
    function handleClick(saleId: number){
            axios(`${BASE_URL}/sales/${saleId}/notification`)
            .then(response => {
                console.log("SUCESSO")
            })
    }
    
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
