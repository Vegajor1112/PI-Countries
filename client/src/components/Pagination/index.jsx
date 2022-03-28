import style from './Pagination.module.css'

const Pagination=(props)=>{
    const {
        currentPage,
        goToNextPage,
        goToPreviousPage,
        goToFirstPage,
        goToLastPage}=props
    
    return(
    <div className={style.mainContainer}>
        <button onClick={goToFirstPage} className={style.pagBtn}>First</button>
        <button onClick={()=>goToPreviousPage()} className={style.pagBtn}>Previous</button>

        <span>{currentPage}</span>
        
        <button onClick={()=>goToNextPage()} className={style.pagBtn}>Next</button>
        <button onClick={goToLastPage} className={style.pagBtn}>Last</button>
    </div>)

}

export default Pagination;