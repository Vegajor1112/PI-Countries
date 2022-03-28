import {useHistory} from 'react-router-dom'
import style from './NavigationButton.module.css'

const NavigationButton = (props) => {
  const { goTo , label } = props;
  const history=useHistory();

  const navigate=()=>{history.push(goTo)}

  return(
      <button onClick={navigate} className={style.navBtn} >{label}</button>
  )
};

export default NavigationButton;
