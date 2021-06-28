class Security {

    constructor(){

        // Add code to create the input and button elements

        this.access1 = createInput("Code1");
        this.access2 = createInput("Code2");
        this.access3 = createInput("Code3");
        this.button1 = createButton("Check");
        this.button2 = createButton("Check");
        this.button3 = createButton("Check");


    }
    hide() {
        this.access1.hide();
        this.access2.hide();
        this.access3.hide();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
    }

    display(){

        // Add code to make the buttons function as expected
        this.access1.position(108,90);
        this.access1.style('background','white');
        this.access2.position(721,190);
        this.access2.style('background','white');
        this.access3.position(116,290);
        this.access3.style('background','white');

        this.button1.position(100,120);
        this.button1.style('background','lightgrey');
        this.button2.position(714,219);
        this.button2.style('background','lightgrey');
        this.button3.position(110,320);
        this.button3.style('background','lightgrey');

        textSize(15);
        fill("white");
        text("score :"+ score,500,40);
          


        this.button.mousePressed(() => {
           if(system.authenticate(this.accessCode1,this.access1.vaule())){
               this.button.hide();
               this.access1.hide();
               score++;
           }
        });

        this.button.mousePressed(() => {
            if(system.authenticate(this.accessCode2,this.access2.vaule())){
                this.button.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button.mousePressed(() => {
            if(system.authenticate(this.accessCode3,this.access3.vaule())){
                this.button.hide();
                this.access3.hide();
                score++;
            }
        });

        if(score===3){
            clear();
            background(bg2);
            fill("black");
            textSIze(25);
            text("TREASURE UNLOCKED", 250,200);
        }
         

    }
    
}