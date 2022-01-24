const MemeImage = ({ img }) => {
   return (
      <div className="meme-container">
         <img src={img} className="meme-image" />
         <h3 className="meme-text meme-text-top">TETSTO1</h3>
         <h3 className="meme-text meme-text-bottom">TETSTO2</h3>
      </div>
   )
}

export default MemeImage