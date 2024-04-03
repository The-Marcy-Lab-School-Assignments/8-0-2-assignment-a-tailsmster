
const GifDisplay = ({gifs}) => {

    // if (!gifs) {
    //     return null; // Return early if gifs is null or undefined
    // }
    

    return (
        <div id='results'>
            <ul>
                <li key='1'>
                    <img src={gifs[0]} alt="Gif1" />
                </li>
                <li key='2'>
                    <img src={gifs[1]} alt="Gif2" />
                </li>
                <li key='3'>
                    <img src={gifs[2]} alt="Gif3" />
                </li>
            </ul>
        </div>
    )
}

export default GifDisplay