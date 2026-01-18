class ValidationError{
    contructor(message){
       super(message)
       this.name="Validation Error")
     }

   throw new Error("Validation Error", this.message);
}




