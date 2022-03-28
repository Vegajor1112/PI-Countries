import gif from '../../assets/gifs/loading.gif'
import style from './Loading.module.css'

const Loading=()=>{
    return(
        <div className={style.mainContainer}>
            <img src={gif} alt="loading" className={style.loadingGif} />
            <span>Loading</span>
        </div>
    )
}

export default Loading;