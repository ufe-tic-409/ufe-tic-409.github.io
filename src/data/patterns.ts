import {Pattern} from "../types/pattern";

const patterns: { [key: string]: Pattern } = {
    "abstract-factory": {
        title: "🏭 Abstract factory pattern (aka. Kit)",
        intent: "Provide an interface for creating families of related or dependent objects without specifying their concrete classes",
        diagram_link: "../assets/abstract-factory.png",
        body: "Let's say you are creating a simple game. In the game, the player can do 3 actions: <strong>attack</strong>, <strong>travel</strong>, <strong>visit a friend</strong>. The game can have multiple different settings : <strong>Medieval</strong>, <strong>Futuristic</strong> and depending on the style chosen, different classes are used.",
        body_subtext: "<i>For example: When traveling, if you are using the medieval setting, you will be using a horse, however, if you are using the Futuristic setting, you will use a spaceship. Same when attacking, if you attack in medieval, you attack with a sword, however, if you are using the Futuristic setting, you will use a Laser Sabre.</i>",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/abstract-factory-0/src/main/java/io/gawish/abstractfactory",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?",
                answer: "The code structure isn't good because we are having to check manually in the Player class for the different environment setting & manually create the corresponding classes based on the setting. This means that having to add a new environment will not only mean having to add the corresponding classes but also having to remember to change the \'if' condition in the player class. Which is not good. Optimally, the Player class shouldn't have to concern about the different types of Transports or Weapons or even about the environmentSetting, he should simply be able to call `travel` or `visit` or `attack` and the system should have to handle calling the right method depending on the user's chosen environmentSetting."
            },
            {
                body: "Let's assume we wanted to add a new setting : <strong>Modern (Car, MachineGun)</strong>. Do the necessary changes have a working program. How hard was it to integrate a new setting classes. ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/abstract-factory-1/src/main/java/io/gawish/abstractfactory",
                answer: "It became apparent in this question that the code structure isn't good because other than having to add the necessary classes `MachineGun` & `Car`, we also had to change the Player class and to add 3 new 'if' conditions to handle the new environment"
            },
            {
                body: "Refactor the code by using the Abstract Factory pattern to remove redundancies and improve code flexibility",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/abstract-factory-2/src/main/java/io/gawish/abstractfactory",
                answer: "The code structure has been improved a lot by using the Abstract Factory pattern here, now adding a new environment doesn't is much easier because we don't have to change the 3 different 'if' conditions in the Player class, the Player simply asks the Environment (Abstract Factory) to getting the him the right Transport or Weapon and he uses them without having to know if he is using the Futuristic version or the Moder version or the Medieval version."
            },
            {
                variant_name: "Concrete default variation",
                body: "How to make it so that you don't have to implement all the methods in the abstract factory ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/abstract-factory-3/src/main/java/io/gawish/abstractfactory",
                answer: "Instead of having all the methods in the Abstract Factory (Environment) abstract, we changed one the methods `getWeapon` to make it return by default a `Sword` and if any environment for example. Modern, wants to change this, he will have to override it. But otherwise, as in the case for prehistoric, you are able to not define a `getWeapon` in the environment and by default it will take the one defined in the Abstract Factory.",
                is_optional: true
            }
        ]
    }
}

export default patterns;