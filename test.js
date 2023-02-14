

class A{
    //1. properties/variable
    name;  // this is only decleration
    surname=''; // this is decleration and initialization with blank
    address="neemuch";// this is decleration and initialization
    state;


    //2. constructor
    constructor(){
        // the role of constructor is to initialization the properties
        //this.member
        this.name = 'suraj';
        this.surname= "singh";
        this.fathername='satyendra singh';
        
    }

    
    //3. method
    showName(){
        console.log(this.name + this.surname+ this.address + this.fathername);   // this is an internal object
    }

    setState(data){
        this.State = data;
    }

    showState(){
        console.log(this.State)
    }
}

class B extends A {
    //1. properties/variabal
    friends1;  //this is only decleration
    friends2= ''; //  this is decleration and initialization with blank value
    



    //2. constructor(special type )
    constructor(frnd3){   // frnd3 is a formal argument
        super();
        this.friends1= 'yogi';
        this.friends2= `ritik`;
        this.friends3= frnd3;
    }



    //3. method 
    listMyFriends(){
        console.log(this.friends1);
        console.log(this.friends2);
        console.log(this.friends3);   // friend 3 is not define to properti area
    }
}


//let create the object2
// let obj = new ClassName();
let obj2 = new B('vikas');   // vikas is a actual argument

// external object
// object.member
obj2.listMyFriends();
obj2.showName();

obj2.setState({
    name: 'vishnu',
    surname: 'jat'
})
obj2.showState();

// lets create the class object
// formula---
// let obj = new ClassName();

let obj = new A();

// this obj is external object
//object.member
 obj.showName()   // . this is member selection operator