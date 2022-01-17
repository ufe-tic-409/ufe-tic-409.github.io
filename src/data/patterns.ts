import {Pattern} from "../types/pattern";

const patterns: {[key: string]: Pattern} = {
    "abstract-factory": {
        title: "🏭 Abstract factory pattern (aka. Kit)",
        intent: "Provide an interface for creating families of related or dependent objects without specifying their concrete classes",
        diagram_link: "../assets/abstract-factory.png",
        body: "Let's say you are creating a simple game. In the game, the player can do 3 actions: <strong>attack</strong>, <strong>travel</strong>, <strong>visit a friend</strong>. The game can have multiple different settings : <strong>Medieval</strong>, <strong>Futuristic</strong> and depending on the style chosen, different classes are used.",
        body_subtext: "<i>For example: When traveling, if you are using the medieval setting, you will be using a horse, however, if you are using the Futuristic setting, you will use a spaceship. Same when attacking, if you attack in medieval, you attack with a sword, however, if you are using the Futuristic setting, you will use a Laser Sabre.</i>",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?",
                answer: "When traveling, if you are using the medieval setting, you will"
            },
            {
                body: "Let's assume we wanted to add a new setting : <strong>Modern (Car, MachineGun)</strong>. Start by adding the necessary classes."
            },
            {
                body: "Do the necessary changes have a working program. How hard was it to integrate a new setting ?",
                code_link: "https://github.com/kagawish/design-patterns-examples/tree/0.3/src/main/java/io/gawish/abstractfactory"
            },
            {
                body: "Refactor the code by using the Abstract Factory pattern to remove redundancies and improve code flexibility",
                code_link: "https://github.com/kagawish/design-patterns-examples/tree/0.4/src/main/java/io/gawish/abstractfactory"
            },
            {
                variant_name: "Concrete fallback variation",
                body: "How to make it so that you don't have to implement all the methods in the abstract factory ?",
                is_optional: true
            }
        ]
    }
}

export default patterns;