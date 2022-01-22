const Form = ({ onClick }) => {
   return (
      <div className="meme-form bottom-layout">
         <form>
            <div className="form-input">
               <input type="text" name="wording1" />
               <input type="text" name="wording2" />
            </div>
            <button onClick={onClick} type="submit">Get a new meme image</button>
         </form>
      </div>
   )
}

export default Form