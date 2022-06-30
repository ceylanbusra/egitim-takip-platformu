import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {
    const userColl = firestore().collection('users');
  const [user, setUser] = useState(null);
  
console.log("Burası auth sayfasının userı", user);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password,Statu,id) => {
          try {
            await auth().signInWithEmailAndPassword(email, password,Statu,id);
          } catch (error) {
            console.log(error);
          }
        },
        signUp: async (email, password, name, phone) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password,name,phone)
              .then(async result => {
                var uid = result.user.uid;
                
              
                await userColl.doc(uid).set({
                  CreatedDate: new Date(),
                  Email: email,
                  Password: password,
                  ImageUrl: '',
                  Name: name,
                  Phone: phone,
                  Id:uid,
                  statu:"",
                });
              });
          } catch (error) {
            console.log(error);
          }
        },
        resetPassword: async email => {
          try {
            await auth().sendPasswordResetEmail(email);
          } catch (error) {
            console.log(error);
          }
        },
        signOut: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
