import './index.css'

const Search=(props)=>{
    const{userDetails}=props
    const{imageUrl,name,role}=userDetails
    return(
        <li className='li-container'>
            <img className='image-1' src={imageUrl}/>
            <h1>{name}</h1>
            <p>{role}</p>
        </li>
    )
}

export default Search

