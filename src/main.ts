//import { gus, studentIds } from "./objects/objects";
//import { nombre } from "./types-basics/types";
import { gus } from "./classes/classes";
import "./styles.css";



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="contenedor">
    ${JSON.stringify(gus)}
  </div>
`

