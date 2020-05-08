// import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import md5 from 'md5';
import firebase from 'firebase';
import { ActivityIndicatorComponent } from 'react-native';

var currentUser;

export const createUser = (username, email, password) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (result) {
            return result.user.updateProfile({
                displayName: username,
            })
        }).catch(function (error) {
            console.log(error);
        });
}

export const addUserToDb = (uid, username, email, password, phone_number) => {

    console.log("MD5 hash of ", password, " is ", md5(password));
    let url = '/users/'.concat(uid);
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

export const addTask = (taskname, listname, username, uid) => {

    var task_id = Date.now();

    const data = {
        'taskname': taskname,
        'id': task_id,
        'completed': false,
        'username': username,
        'listname': listname
    };

    console.log(data);
    console.log("Username mila??", username);
    // console.log(username.username);
    console.log("Listname mila??", listname);
    // console.log(listname.listname);

    firebase.database()
        .ref('/users').child(uid).child(data.listname).child(data.id)
        .set(data)
        .then(() => console.log('Task created!!!'))
        .catch(err => console.log(err));
}

export const signOut = () => {
    try {
        firebase.auth().signOut();
        console.log("signed Out!");
    } catch (e) {
        console.log(e);
    }
}