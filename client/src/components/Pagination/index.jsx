const Pagination=(props)=>{
    const {currentPage,goToNextPage,goToPreviousPage}=props
    
    return(<>
    <button onClick={()=>goToPreviousPage()}>Previous</button>    
    <span>{currentPage}</span>
    <button onClick={()=>goToNextPage()}>Next</button>
    </>)

}

export default Pagination;