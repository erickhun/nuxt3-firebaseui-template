<template>
    <div>
      <h2>Login</h2>
      <span v-if="currentUser"> Welcome {{ currentUser.displayName }}</span>
      <span v-else> <div id="firebaseui-auth-container"></div></span>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
  import * as firebaseui from 'firebaseui'
  import 'firebaseui/dist/firebaseui.css'
  import { useCurrentUser } from 'vuefire';

  const currentUser = useCurrentUser()
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(useFirebaseAuth());  
  const config = {
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      EmailAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: "/",
    callbacks: {
      signInSuccessWithAuthResult() {
        console.log("Successfully signed in");
        // window.location = "/";
      },
    },
  }
  
  onMounted(() => {
    ui.start("#firebaseui-auth-container", config);
  })
  
</script>