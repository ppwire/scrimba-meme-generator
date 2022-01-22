const Form = () => {
   return (
      <div className="meme-form">
         <form>
            <div className="form-input">
               <input type="text" name="wording1" />
               <input type="text" name="wording2" />
            </div>
            <button type="submit">Get a new meme image</button>
         </form>
      </div>
   )
}

export default Form