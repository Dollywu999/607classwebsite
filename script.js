<script type="module">
  // 引入 Firebase 9.x 模組
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

  // Firebase 配置
  const firebaseConfig = {
    apiKey: "AIzaSyB_r4w3pb1ZIO8YUCA9Yl9IITSHZi3cCiI",
    authDomain: "class-6bb0b.firebaseapp.com",
    projectId: "class-6bb0b",
    storageBucket: "class-6bb0b.appspot.com",
    messagingSenderId: "709913685558",
    appId: "1:709913685558:web:925486cd1b5b9f99527297",
  };

  // 初始化 Firebase
  const app = initializeApp(firebaseConfig);

  // 獲取 Firestore 實例
  const db = getFirestore(app);

  // 在這裡可以繼續寫您的 Firestore 操作
</script>