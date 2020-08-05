
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBoICLOFQRTrPw82T0JzGtN0_5AYIGM-SI",
    authDomain: "webtest-57c6f.firebaseapp.com",
    databaseURL: "https://webtest-57c6f.firebaseio.com",
    projectId: "webtest-57c6f",
    storageBucket: "webtest-57c6f.appspot.com",
    messagingSenderId: "944294135484",
    appId: "1:944294135484:web:806f95b8ea2cdec423b2b9",
    measurementId: "G-WTSWS8ET39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
const db = firebase.firestore();
  




const displayCart = document.querySelector("#cartItems")
function addSelectedDishToCart(nameDish){
    let li = document.createElement("li");
    li.textContent = nameDish;
    li.id = "dishCartItem"

    displayCart.appendChild(li);
}



$(document).ready(function(){
    $('#dishContainer').on('click', '#addToCartButton', function(){
        nameDish = $(this).closest("li").children("h5").text();
        descriptionDish = $(this).closest("li").children("p").text();
        priceDish = $(this).closest("li").children("small").text();
        console.log(nameDish, descriptionDish, priceDish)
        $("#cartVisibility").show();
        addSelectedDishToCart(nameDish);
    })
});



const displayMainDishes = document.querySelector("#displayMainDishes")
function renderDish(doc){
    let li = document.createElement("li");
    let name = document.createElement("h5");
    let description = document.createElement("p");
    let price = document.createElement("small")

    li.classList.add("list-group-item")
    name.classList.add("mb-1")
    description.classList.add("mb-1")
    
    name.id = "nameOfDish";
    description.id = "descriptionOfDish";
    price.id = "priceOfDish";

    li.setAttribute('id', doc.id);
    name.textContent = doc.data().name;
    description.textContent = doc.data().description;
    price.textContent = doc.data().price + " kr";

    var addToCartButton = document.createElement("span")
    addToCartButton.innerHTML = '<button type="button" class="btn-primary" id="addToCartButton">Add</button>'

    li.appendChild(name);
    li.appendChild(description);
    li.appendChild(price);
    li.appendChild(addToCartButton);
    displayMainDishes.appendChild(li);
}

$("#checkoutButton").click(function(){
    $("#cartItems li").each(function(){
        console.log($(this).text());
        

    })
});




var userRef1 = db.collection("food");

userRef1.get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderDish(doc);
    })
   
});
   


var logInAccountButton = document.getElementById("logInAccountButton");

logInAccountButton.addEventListener("click", e => {
    const email = inputLogInEmail.value;
    const password = InputLoginPassword.value;
    

    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});

$("#modalNavButton").on("click",function(e){
    e.preventDefault();
    $('#logInSignUpModal').modal('show');
})



$(document).ready(function(){

    $("#signUpTab, #signUpModalButton").click(function(){
    

        $("#logInFieldset").css('display', 'none')
        $("#signUpFieldset").css('display', 'block')
        })
    
        $("#logInTab, #logInModalButton").click(function(){
    
            $("#signUpFieldset").css('display', 'none')
            $("#logInFieldset").css('display', 'block')
    
    
        })
        
    });





/*









$("#secondaryAccountButton").on("click", function() { 
        $("#modalTitle").text("Sign Up"); 
        $("#secondaryAccountButton").text("Already have an account? Log In"); 
        $("#primaryAccountButton").text("Sign Up"); 



        

})

        var inputEmail = document.getElementById("inputEmail");
        var InputPassword = document.getElementById("inputPassword");
        var primaryAccountButton = document.getElementById("primaryAccountButton");

        var modalTitle = document.getElementById("exampleModalLongTitle")


const docRef = firestore.collection("text").doc("text");
const outputHeader = document.querySelector("#firestoreOutput");
const inputTextField = document.querySelector("#firestoreInput");
const saveButton = document.querySelector("#saveButton");

    var li = document.createElement("li");
    li.classList.add("list-group-item");

    li.appendChild(document.createTextNode());
    ul.appendChild(li);

});

saveButton.addEventListener("click", function() {
  const textToSave = inputTextField.value;
  console.log("Saving " + textToSave + " to Firestore");
  docRef.set({

      field in Firestore 
      textFromFS: textToSave
  }).then(function(){
      console.log("Status saved");
  }).catch(function(){
      console.log("Error" + error);
  });

});



  getRealtimeUpdates = function() {
      docRef.onSnapshot(function (doc){
          if(doc && doc.exists) {
              const myData = doc.data();
              outputHeader.innerText = "Text from Firestore: " + myData.textFromFS;
          }
      });
  }
getRealtimeUpdates();






*/
