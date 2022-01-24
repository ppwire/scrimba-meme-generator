const MemeImage = ({ img,memeText }) => {
   return (
      <div className="meme-container">
         <img src={img} className="meme-image" />
         <h2 className="meme-text meme-text-top">{memeText.text1}</h2>
         <h2 className="meme-text meme-text-bottom">{memeText.text2}</h2>
      </div>
   )
}

export default MemeImage