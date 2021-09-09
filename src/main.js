import { createApp } from 'vue';
import { Button, message } from 'ant-design-vue';
import App from './App.vue';
import './index.css';

const app = createApp(App);
app.config.productionTip = false;

/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(Button).mount('#app');

app.config.globalProperties.$message = message;
