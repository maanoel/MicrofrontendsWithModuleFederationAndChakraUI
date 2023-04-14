import dynamic from "next/dynamic";  
import styles from "@/styles/Home.module.css";


import ModuleD from "@/components/ModuleD";

const ModuleA = dynamic(() => import("app2/ModuleA"), {  
  ssr: false,
});

const ModuleB = dynamic(()=> import('app3/ModuleB'),{
  ssr: false,
});

const ModuleC = dynamic(()=> import('app4/ModuleC'),{
  ssr: false
});


export default function Home() {  
  return (
    <>
      <main className={styles.main}>
          <ModuleD/ >
          <ModuleA />
          <ModuleB />
          <ModuleC />
      </main>
    </>
  );
}