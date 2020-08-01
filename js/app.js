
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
  




var modal = document.getElementById("exampleModalCenter");
var modalButton = document.getElementById("modalNavButton");
modalButton.onclick =  function() {
    modal.style.display = "block";

};

const displayMainDishes = document.querySelector("#displayMainDishes")
function renderDish(doc){
    let li = document.createElement("li");
    let name = document.createElement("h5");
    let description = document.createElement("p");
    let price = document.createElement("small")
    let addToCartButton = document.createElement("button");

    li.classList.add("list-group-item")
    name.classList.add("mb-1")
    description.classList.add("mb-1")
    addToCartButton.classList.add("btn-primary")
    
    name.id = "nameOfDish";
    description.id = "descriptionOfDish";
    price.id = "priceOfDish";
    addToCartButton.id = "addToCartButton";

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    description.textContent = doc.data().description;
    price.textContent = doc.data().price + " kr";
    addToCartButton.innerHTML = "Add";

    li.appendChild(name);
    li.appendChild(description);
    li.appendChild(price);
    li.appendChild(addToCartButton);
    displayMainDishes.appendChild(li);
}

var userRef1 = db.collection("food");

userRef1.get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderDish(doc);
    })
   
});
   








/*




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





var inputEmail = document.getElementById("inputEmail");
var InputPassword = document.getElementById("inputPassword");
var loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", e => {
    const email = inputEmail.value;
    const password = InputPassword.value;
    

    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});
*/
