import { initializeApp } from "firebase/app";
import { getAuth, updateProfile, updatePassword, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getDownloadURL, getStorage, ref, deleteObject, uploadBytes } from "firebase/storage";
import uuid from 'react-uuid';
import env from "react-dotenv";
import { getDatabase, ref as refDB, set, get, child, update } from "firebase/database";
import { IPlan } from './src/types/planTypes'



const firebaseConfig = {
  apiKey: env.REACT_APP_FIREBASE_API_KEY,
  authDomain: env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

function write({ path, data }) {
  console.log(`write path=${path} data=${data}`)
  return set(refDB(database, path), data);
}

function read({ path }) {
  console.log(`read path=${path} `);
  return get(child(refDB(database), path)).then((snapshot) => snapshot.val());
}

function updateData(updates) {
  return update(refDB(database), updates);
}


export function writePlanData(plan: IPlan) {
  return write({ path: 'plans/' + uuid(), data: plan });
}

export function updatePlanData(plan: IPlan) {
  return updateData({ ['plans/' + plan.planId]: plan });
}

function objectToArray(obj) {
  return Object.keys(obj)?.map(
    key => obj[key]
  )
}

export function readAllPlans() {
  return read({ path: 'plans/' })
    .then(res =>
      Object.keys(res).map(
        planId => {
          const plan = res[planId];
          const intents = plan?.intents ? objectToArray(plan.intents) : [];

          intents.forEach(intent =>
            intent.spendings = intent?.spendings ? objectToArray(intent.spendings) : [])
          return { ...plan, planId, intents };
        }
      )
    );

}


