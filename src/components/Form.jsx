const Form = ({ onClick, haddleForm, formData }) => {
   return (
      <div className="meme-form bottom-layout">
         <form>
            <div className="form-input">
               <input type="text" name="text1" value={formData.text1} onChange={haddleForm} />
               <input type="text" name="text2" value={formData.text2} onChange={haddleForm} />
            </div>
            <button onClick={onClick} type="submit">Get a new meme image</button>
         </form>
      </div>
   )
}

export default Form