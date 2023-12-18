import React from "react"
import 'bootstrap/dist/css/bootstrap.css'


import posterbarbie from "./Images/poster-barbie.jpg"
import posterBladeRunner from "./Images/poster-blade-runner.jpg"
import posterDjango from "./Images/poster-django.jpg"
import posterDrive from "./Images/poster-drive.jpg"
import posterSoul from "./Images/poster-soul.jpg"
import posterSpiderMan from "./Images/spider-man.jpg"
import saw from "./Images/saw.jpg"
import minions from "./Images/minions.jpg"

import styles from './Styles/SectionTwo.module.css'

function SectionTwo(){
    return(
        <section>
            <h2 className={styles.texto}>Em Alta</h2>
                    <div className={styles.Alta}>
                        <a href="https://www.google.com/search?q=barbie+filme&sca_esv=591295111&sxsrf=AM9HkKm3Gju_qsIZ6MAEEAPKYky9SYtlZQ%3A1702668671682&ei=f6l8ZcedKaa_5OUP8dWIyAI&ved=0ahUKEwiH2eGKl5KDAxWmH7kGHfEqAikQ4dUDCBA&uact=5&oq=barbie+filme&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGJhcmJpZSBmaWxtZTILEC4YgwEYsQMYgAQyBRAAGIAEMggQABiABBixAzIFEAAYgAQyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyGhAuGIMBGLEDGIAEGJcFGNwEGN4EGOAE2AEDSOUUUHxYtRJwAngBkAEAmAGcAqAB5gmqAQUwLjYuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIOEAAY5AIY1gQYsAPYAQHCAhMQLhhDGIAEGIoFGMgDGLAD2AECwgITEC4YgAQYigUYQxjIAxiwA9gBAsICFhAuGIAEGIoFGEMY1AIYyAMYsAPYAQLCAg4QABiABBiKBRixAxiDAcICCxAuGIAEGLEDGIMBwgIHEC4YgAQYCsICCBAAGIAEGMsBwgIKEAAYgAQYywEYCsICBhAAGBYYHsICFhAuGIAEGAoYlwUY3AQY3gQY4ATYAQPiAwQYACBBiAYBkAYTugYGCAEQARgJugYGCAIQARgIugYGCAMQARgU&sclient=gws-wiz-serp#wptab=si:ALGXSlZYrcoFvipndZqPsHBKvoXPhwOqTYsHF3_nJv0jFSk0ON-eMOeJ-C_ITqS-mzoCHAmus202svL8hpBAwKybyiIN1bhxJH3CJI2Xpc2jG5j7uJI1A_1QDE4BaW73NC3d-9QDU-JP5lmlYHQ02HpS_FCCyI1UpHAKpIl_i12jcu6TdtKx2J8%3D" target="_blank"><img src={posterbarbie} alt="" className={styles.Img}/></a>
                        <a href="https://www.google.com/search?q=assistir+blade+runner+%28filme%29&sca_esv=591295111&sxsrf=AM9HkKnVsDUvwtJ4iEhBHONNF5ASCW9tSw%3A1702668676669&ei=hKl8Zf-5KKq05OUP9cajiAs&ved=0ahUKEwj_i5KNl5KDAxUqGrkGHXXjCLEQ4dUDCBA&uact=5&oq=assistir+blade+runner+%28filme%29&gs_lp=Egxnd3Mtd2l6LXNlcnAiHWFzc2lzdGlyIGJsYWRlIHJ1bm5lciAoZmlsbWUpMgYQABgIGB4yBhAAGAgYHkjVQVCkEVjPP3AFeAGQAQCYAdgBoAGMGaoBBjAuMjEuMbgBA8gBAPgBAcICChAjGIAEGIoFGCfCAgUQABiABMICBhAAGBYYHsICBhAAGAcYHsICBBAAGB7CAggQABgIGAcYHuIDBBgAIEGIBgE&sclient=gws-wiz-serp" target="_blank"><img src={posterBladeRunner} alt="" className={styles.Img}/></a>
                        <a href="https://www.google.com/search?q=assistir+django+%28filme%29&sca_esv=591295111&sxsrf=AM9HkKldtofFZOf2Ks2_slBFaitoVe4fQQ%3A1702668717120&ei=ral8Zcz-Bqb15OUP7uWIiA4&ved=0ahUKEwiMibegl5KDAxWmOrkGHe4yAuEQ4dUDCBA&uact=5&oq=assistir+django+%28filme%29&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2Fzc2lzdGlyIGRqYW5nbyAoZmlsbWUpMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHkitKFCGBViSJXABeAGQAQCYAYwBoAGpCKoBAzAuOLgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAgQQABgewgIIEAAYCBgHGB7CAggQABgIGB4YDeIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp" target="_blank"><img src={posterDjango} alt="" className={styles.Img}/></a>
                        <a href="https://www.google.com/search?q=assistir+drive+%28filme%29&sca_esv=591295111&sxsrf=AM9HkKkDvDYK6Ftdg4v29Wh4BKFZ2Opq4w%3A1702668783234&ei=76l8ZfOPCPz35OUP7vy8yAs&ved=0ahUKEwizw_S_l5KDAxX8O7kGHW4-D7kQ4dUDCBA&uact=5&oq=assistir+drive+%28filme%29&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmFzc2lzdGlyIGRyaXZlIChmaWxtZSkyBRAAGIAEMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeSK0vULgDWOYqcAN4AZABAJgBlAGgAaoLqgEEMC4xMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgcQIxiwAhgnwgIHEC4YgAQYDcICBxAAGIAEGA3CAgYQABgHGB7CAggQABgIGAcYHsICFhAuGIAEGA0YlwUY3AQY3gQY4ATYAQHCAgoQABgIGAcYHhgKwgIGEAAYHhgNwgIIEAAYgAQYogTiAwQYACBBiAYBkAYIugYGCAEQARgU&sclient=gws-wiz-serp" target="_blank"><img src={posterDrive} alt="" className={styles.Img}/></a>
                        <a href="https://www.google.com/search?q=assistir+soul+%28filme%29&sca_esv=591295111&sxsrf=AM9HkKlMUN8jBO7wxl9C2XJAv-Y8TgJtqQ%3A1702668775719&ei=56l8Zeq8K42f5OUPjsmMkAo&ved=0ahUKEwiqzK-8l5KDAxWND7kGHY4kA6IQ4dUDCBA&uact=5&oq=assistir+soul+%28filme%29&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWFzc2lzdGlyIHNvdWwgKGZpbG1lKTIFEAAYgAQyCBAAGAgYBxgeMggQABgIGAcYHjIEEAAYHjIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB5IrBdQ3wZYwBRwAXgBkAEAmAGNAaAB_wWqAQMwLja4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIGEAAYBxgewgIGEAAYHhgNwgIHEAAYgAQYDcICCBAAGAgYHhgN4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp" target="_blank"><img src={posterSoul} alt="" className={styles.Img}/></a>
                        <a href="https://www.google.com/search?q=assistir+homem+aranha+%28filme%29&sca_esv=591295111&sxsrf=AM9HkKn4UkPyeTEgtWMvvisTiiAzTHsdOQ%3A1702668824971&ei=GKp8ZY7yOp6b5OUP_YOIiAw&ved=0ahUKEwiO3u3Tl5KDAxWeDbkGHf0BAsEQ4dUDCBA&uact=5&oq=assistir+homem+aranha+%28filme%29&gs_lp=Egxnd3Mtd2l6LXNlcnAiHWFzc2lzdGlyIGhvbWVtIGFyYW5oYSAoZmlsbWUpMgYQABgHGB4yBhAAGAgYHkj2L1CRBVisLnADeAGQAQCYAZ4BoAGyEaoBBDAuMTe4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIEEAAYHsICBhAAGB4YDcICCBAAGAcYHhgPwgIIEAAYCBgeGA3CAggQABgFGAcYHsICCBAAGAgYBxge4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp" target="_blank"><img src={posterSpiderMan} alt="" className={styles.Img}/></a>
                        <a href=""><img src={saw} className={styles.Img}></img></a>
                        <a href=""><img src={minions} className={styles.Img}/></a>
                    </div>
        </section>
    )
}

export default SectionTwo