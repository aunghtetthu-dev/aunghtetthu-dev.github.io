
const firebaseConfig = {
    apiKey: "AIzaSyCR0iljVIiaskWkujFTBUXYhELYMCj2FcQ",
    authDomain: "myportfolio-9fd3a.firebaseapp.com",
    databaseURL: "https://myportfolio-9fd3a-default-rtdb.firebaseio.com",
    projectId: "myportfolio-9fd3a",
    storageBucket: "myportfolio-9fd3a.appspot.com",
    messagingSenderId: "615237585393",
    appId: "1:615237585393:web:e561ae63a36f237fb61c50",
    measurementId: "G-0ETQM8R1H2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let contact_form =  document.querySelector('.contact-form');

const db = firebase.database().ref('clients');

contact_form.addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    let name = contact_form.name.value;
    let phone = contact_form.phone.value;
    let email = contact_form.email.value;
    let subject = contact_form.subject.value;
    let message = contact_form.message.value;

    saveMessage(name,phone,email,subject,message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    },3000)
    contact_form.reset();
}

const saveMessage = (name,phone,email,subject,message) => {
    let newForm = db.push();

    newForm.set({
        name : name,
        phone : phone,
        email : email,
        subject : subject,
        message : message
    });
}
