import { getApps, initializeApp } from "firebase/app";

export function getMelazaFirebaseApp() {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

  if (!projectId || !apiKey || !appId) {
    return null;
  }

  if (getApps().length > 0) {
    return getApps()[0];
  }

  return initializeApp({
    apiKey,
    appId,
    projectId,
  });
}
