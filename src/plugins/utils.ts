import {App} from 'vue';

declare interface Utils {
    addN(n: number): number;
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $utils: Utils;
    }
}

export default {
    install(app: App) {
        app.config.globalProperties.$utils = {
            addN(n: number): number {
                return n == 1 ? 1 : n + this.addN(n - 1);
            }
        }
    }
}