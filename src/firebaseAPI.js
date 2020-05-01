// import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import md5 from 'md5';
import firebase from 'firebase';

export const createUser = (email, password) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => console.log("createUser error: ", error))
}

export const addTest = (username, email, password, phone_number) => {
    
    console.log("MD5 hash of ",password," is ",md5(password));
    url = '/users/'.concat(username);
    console.log(url);

    firebase.database()
        .ref(url)
        .set({
            username: username,
            password: md5(password),
            email: email,
            phone_number: phone_number
        })
        .then(() => console.log('LALALALLAALLALAALALALALA'));
}

export const addTask = (taskname, listname, username) => {
    
    const data = {
        'taskname': taskname,
        'id': Date.now(),
        'completed': false,
        'username': username,
        'listname': listname
    };

    console.log(username);
    console.log(username.username);
    console.log(listname);
    console.log(listname.listname);

    firebase.database()
        .ref('/users').child(username).child(listname).child(Date.now())
        .set(data)
        .then(() => console.log('Task created!!!'));
}