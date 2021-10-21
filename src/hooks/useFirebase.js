import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, 
    signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email,setEmail]=useState();
    const [DisplayName,setDisplayName]=useState();
    const [erorr,setErorr]=useState();

    const [password,setPassword]=useState();
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleName=e=>{
        setDisplayName(e.target.value)
    }

    const handleEmail=e=>{
        setEmail(e.target.value)
    }
    const handlePassword=e=>{
        setPassword(e.target.value)
    }
    const handleNewUser = e => {
        e.preventDefault();
        if(password.length < 6){
            setErorr("Password should be at least 6 characters")
            return;
        }
        createUserWithEmailAndPassword(auth,email,password,DisplayName)
        
    }
    const loginWithEmailAndPassword=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
          const user = userCredential.user;
          setUser(user)
         });
    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user)
        })
            .finally(() => { setLoading(false) });
    }
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        loading,
        signInUsingGoogle,
        logOut,
        handleNewUser,
        handlePassword,
        handleEmail,
        erorr,
        loginWithEmailAndPassword,
        handleName
    }
}

export default useFirebase;