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
    },
    "singleton": {
        title: "⓵ Singleton pattern",
        intent: "Ensure a class has only one instance and provide a global point of access to it.",
        diagram_link: "./assets/singleton.png",
        body: "Starting with the code implemented on the Builder pattern, in this example, you will have to implement a Logger class that will be used by all the different classes to generate log messages.",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?"
            },
            {
                body: "How can you make it easier to access the Logger without having to pass it to each class ?"
            },
            {
                variant_name: "Eager creation variation",
                body: "Implement the eager creation variation of the singleton on a <strong>Sound</strong> singleton class",
                is_optional: true
            },
            {
                variant_name: "Registry variation",
                body: "How can you implement multiple different loggers that log to different outputs ?",
                is_optional: true
            }
        ]
    },
    "builder": {
        title: "🏗 Builder pattern",
        intent: "Separate the construction of a complex object from its representation so that the same construction process can create different representations.",
        diagram_link: "./assets/builder.png",
        body: "Let's say you are building a sci-fi simulation game. In the game, you can create a <strong>Spacebase</strong> and each spacebase can have multiple <strong>Electricity Generators</strong>, <strong>Water Plants</strong> and <strong>Houses</strong>.",
        body_subtext: "For example: A spacebase can have 2 Electricity Generators, 2 Water Plants and 5 Houses.",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?"
            },
            {
                body: "How can we hide the complexity of creating a Spacebase using constructors ? What do you think about this solution ?"
            },
            {
                body: "How can we refactor the code implementing the Builder pattern to hide the complexity ?"
            },
            {
                variant_name: "Director variation",
                body: "Implement the director variation to facilitate the Spacebase creation process even further.",
                is_optional: true
            },
            {
                variant_name: "Fluent variation",
                body: "Can you implement a <a href=\"https://en.wikipedia.org/wiki/Fluent_interface\">fluent interface</a> for the builder to enable function chaining?",
                is_optional: true
            }
        ]
    },
    "factory-method": {
        title: "🛠 Factory method pattern",
        intent: "Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses."   ,
        diagram_link: "./assets/factory-method.png",
    }
}

export default patterns;