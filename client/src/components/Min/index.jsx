import style from './Min.module.css'

const Min=(props)=>{
    const {countryId,onClickFunction}=props;
    
    return(
        <>
            <input type="button" value={countryId} onClick={onClickFunction} />
        </>
    )
}

export default Min;