
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
  




var cart = [];
var cartIndex = 0;
function addSelectedDishToCart(nameDish, cartIndex){
    const displayCart = document.querySelector("#cartItems")
    let li = document.createElement("li");
    li.textContent = nameDish;
    li.id = "cartDishItem";
    cart.push(nameDish+cartIndex);
    


    displayCart.appendChild(li);
}



$(document).ready(function(){
    
    $('#dishContainer').on('click', '#addToCartButton', function(){
        nameDish = $(this).closest("li").children("h5").text();
        descriptionDish = $(this).closest("li").children("p").text();
        priceDish = $(this).closest("li").children("small").text();
        console.log(nameDish, descriptionDish, priceDish)
        $("#cartVisibility").show();
        cartIndex++;
        addSelectedDishToCart(nameDish, cartIndex-1);
    })
});




function renderDish(doc){
    const displayMainDishes = document.querySelector("#displayMainDishes")
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


var foodRef = db.collection("food");

foodRef.get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderDish(doc);
    })
   
});

$("#tableNumberButton").on("click", function(){
    var tableNumber = $("#tableNumberInput").val();
    $("#tableNumberInput").css('display', 'none');
    $("#tableNumberButton").css('display', 'none');
    $("#scrollInfo").text("Table: " + tableNumber);
})

/* TODO send to "kitchen" instead of firestore*/
$("#checkoutButton").click(function(){

    $('#confirmCartModal').modal('show');
    const confirmCartList = document.querySelector("#confirmCartList");
    var userID = firebase.auth().currentUser.uid;
    var userRef = db.collection("users");
    var tableNumber =  $("#scrollInfo").text();


    function confirmRenderDish(dishName, indexDish){
        let li = document.createElement("li");
        let dishNameConfirm = document.createDocumentFragment("h5");
        let trashButton = document.createElement("button");
        trashButton.classList.add("btn");
        trashButton.type = ("button")
        trashButton.id = ("trashButton")
        let trashIcon = '<i class="fa fa-trash"></i>'
        trashButton.innerHTML = trashIcon;

        dishNameConfirm.textContent = dishName;
        li.classList.add("list-group-item");
        li.classList.add("d-flex");
        li.classList.add("justify-content-between");
        li.classList.add("align-items-center");
        li.id = ("dishItemConfirmed"+ indexDish);
        li.appendChild(dishNameConfirm);
        li.appendChild(trashButton);
        confirmCartList.appendChild(li);

       
        
    }
    indexDish=0;
    $.each(cart, function(index, value){
        
        var dishName = value;
        console.log(value);
        indexDish++;
        confirmRenderDish(dishName, indexDish-1);
        /* detta skriver till firebase istället för confirmModal
        var dish =  $(this).text();
        Orders.push(dish);
        });
        userRef.doc(userID).set({
            table : tableNumber,
            Orders
        });
        */
       
});
$("#trashButton").click(function(){
    console.log("sho");
    var idRemove = $(this).closest("li").attr("id");
    
    console.log(idRemove.slice(-1));
});


});



$("#confirmOrderButton").on("click", function(){
    console.log(cart);
})





   



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

$("#signUpButton").on("click", function(){
    var email = $("#inputSignUpEmail").val();
    var password = $("#inputSignUpPassword").val();

    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

    var user = firebase.auth().currentUser;
    console.log(user.uid);


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

