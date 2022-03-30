import style from './Activity.module.css';

const Activity = (props)=>{
    const {nombre,dificultad,duracion,temporada}=props
    return(
        <div className={style.mainContainer}>
            <div><span className={style.label}>Activity:</span> <span className={style.value}>{nombre}</span></div>
            <div><span className={style.label}>Difficulty: (1-5):</span> <span className={style.value}>{dificultad}</span></div>
            <div><span className={style.label}>Duration:</span> <span className={style.value}>{duracion} hour(s)</span></div>
            <div><span className={style.label}>Season: </span><span className={style.value}>{temporada}</span></div>
        </div>
    )
}

export default Activity;