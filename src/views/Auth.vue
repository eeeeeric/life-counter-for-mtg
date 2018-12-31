<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from '@/firebase';
import firebaseui from 'firebaseui';

@Component
export default class Auth extends Vue {
    get name() {
        return 'auth';
    }

    public mounted() {
        const redirect = this.$route.query.redirect ? this.$route.query.redirect as string : '/';
        const uiConfig = {
            signInSuccessUrl: redirect,
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
        };
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }
}
</script>
