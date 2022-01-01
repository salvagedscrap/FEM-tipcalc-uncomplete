const app = Vue.createApp({
    data(){
      return {
          totalBill:0,
          tipPerPerson:0,
          tip:0,
          totalTip:0,
          bill:0,
          customPercentage:'',
          people:0,
          totalPerPerson:0,
          percentage1:5,
          percentage2:10,
          percentage3:15,
          percentage4:25,
          percentage5:50,
          calculatedLog: []
  
          
      }
  },
  methods:{

      percentageOne(){
          this.tip = this.bill / 100 * this.percentage1
         
       },
       percentageTwo(){
        this.tip = this.bill / 100 * this.percentage2
       },
       percentageThree(){
        this.tip = this.bill / 100 * this.percentage3
       },
       percentageFour(){
        this.tip = this.bill / 100 * this.percentage4
       },
       percentageFive(){
        this.tip = this.bill / 100 * this.percentage5
       },


      calcTip(){
        if(this.customPercentage=== ''){
            this.tipPerPerson = this.tip / this.people
           this.billPerPerson = this.bill / this.people
           this.totalPerPerson= this.tipPerPerson + this.billPerPerson
           this.totalBill = +this.tip + +this.bill;
    
           
        } else{
            this.tip = this.bill / 100 * this.customPercentage
             this.tipPerPerson = this.tip / this.people
           this.billPerPerson = this.bill / this.people
           this.totalPerPerson= this.tipPerPerson + this.billPerPerson
           this.totalBill =+this.tip + +this.bill;
    
           
        }
        
        this.calculatedLog.push(this.totalBill)
        // console.log(this.totalPerPerson);

       
      },
      reset(){
        this.tipPerPerson=0;
        this.tip=0;
        this.totalTip=0;
        this.bill=0;
        this.custom=0;
        this.percentage=0;
        this.people=0;
        this.totalPerPerson=0;
      }
  },
  computed : {}
  });
  
  app.mount('#calc');
  
  
  