const WrapperLoader = ({isLoader,children})=>{
    if(isLoader){
        return (<div>Loading</div>)
    }else{
        return children
    }
}