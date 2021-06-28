class System{

    constructor(){

        this.score=0;
    }

    // Add code to authenticate the given code and the access codes.

    authenticate(access1,enteredCode){
        if(access1 === enteredCode)
            return true
        else
            return false 
    }   

    authenticate(access2,enteredCode){
        if(access2 === enteredCode)
            return true
        else
            return false 
    }   

    authenticate(access3,enteredCode){
        if(access3 === enteredCode)
            return true
        else
            return false 
    }   

    

}