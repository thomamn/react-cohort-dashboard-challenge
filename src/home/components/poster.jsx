
export default function Poster(){

    return (
        <div className="poster">
            <form className="form">
          
          
                <label
                    >Logo:<input
                    type="text"
                    name="firstName"
                    //value={formData.firstName}
                    //onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                    
                </label>

                
                <input className="form__submit" type="submit" value="Post" />
            </form>

        </div>
        
        
    )
}