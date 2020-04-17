import { InjectionKey } from "@vue/composition-api";
import { Demo } from "@/stores/demo";

const DemoKey: InjectionKey<Demo> = Symbol("Demo");

export default DemoKey;
