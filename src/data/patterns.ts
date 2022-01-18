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
                body: "How can we refactor the code implementing the Builder pattern to hide the complexity ?",
                is_primary_implementation: true
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
    },
    "adapter": {
        title: "🔌 Adapter",
        intent: "Converts the interface of a class into another interface clients expect.",
        diagram_link: "./assets/adapter-diagram.png",
        body: "You are creating your game. In the game, you as a player can launch an attack using a <strong>Sword</strong>. After working on the game, you realize you need to add the possibility of attacking using a <strong>Gun</strong>. Both <strong>Sword</strong> and <strong>Gun</strong> have a different interfaces as you will see in the code because a sword is a close combat weapon and a gun is a ranged weapon.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/d4b137006167258ab5e090a5660c70a6202fd865/src/main/java/io/gawish/adapter",
        questions: [
            {
                body: "Start by copying the start code and reading it."
            },
            {
                variant_name: "Composition variation",
                body: "How would you go about making the Gun work as a weapon without changing the Gun interface or the weapon interface ?",
                is_primary_implementation: true,
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/eae5b4b60925e55e13e277026c02baf6dc0651c5/src/main/java/io/gawish/adapter"
            },
            {
                variant_name: "Inheritance variation",
                body: "Can you change the adapter to use Inheritance instead of composition ? What are the pros and cons of each method?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/ed7a556f0a09bb7aa1b0c2b7d977c0f64fc13f19/src/main/java/io/gawish/adapter"
            }
        ]
    },
    "proxy": {
        title: "🔁 Proxy pattern (aka. Surrogate)",
        intent: "Structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.",
        diagram_link: "./assets/proxy-diagram.png",
        body: "You are creating you sci-fi game. In your game, you must render multiple Players. Rendering is the process of converting the data structure containing information about a certain object and the environment surrounding it to an image to display. However, rendering a Player is a costly operation.",
        body_subtext: "For the sake of the example, we will assume that rendering doesn't need to be redone if the player hasn't change his position.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/62df8787542064d767c02aabf57e1842e632c06e/src/main/java/io/gawish/proxy",
        questions: [
            {
                body: "Start by copying the start code and reading it. "
            },
            {
                body: "Start by implementing proxy pattern to protect the player from being re-rendered again if he hasn't changed his position.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/1aeb2722c532faee6cdf8a5bbcd89ad86780cede/src/main/java/io/gawish/proxy"
            },
            {
                body: "Finally, add <strong>`calculateRank`</strong> method than returns a number from 1 to 100. Assuming calculating the ranking is an intensive process. You can cache the last score that was returned to the user and only recalculate it if the players changes position. Use the proxy you developed in the last question to cache the score. Display the rank on each loop to view when it changes.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/8fdccb82a97073b291ae2c068616ba993b939f15/src/main/java/io/gawish/proxy"
            }
        ]
    },
    "decorator": {
        title: "🎄 Decorator pattern (aka. Wrapper)",
        intent: "Attach additional responsibilities to an object (not a class) dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.",
        diagram_link: "./assets/decorator-diagram.png",
        body: "You are creating you sci-fi game. In your game, you can own a spaceship. Your spaceship has a basic gun and a basic shield. You can customize your spaceship by attaching addons to it. In our example your will be able to attach <strong>Laser gun</strong> to improve your attack. You can also equip a<strong>Point-defense cannon</strong> to improve your defense.",
        body_subtext: "We don't care about how much those addons will impact your attack and defense we will be focusing on ensuring they are activated at the correct time if they are attached to your spaceship. Also a spaceship may have any combination of the above equipments.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/31aac56e0011d8237d38ca63bf5ed18a96e59c03/src/main/java/io/gawish/decorator",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?"
            },
            {
                body: "Let's assume we wanted to add a new Attack weapon. How hard will it be ? Why ?"
            },
            {
                body: "Start by implementing the decorator pattern to improve the code structure.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/bbdbc72ceee6381fbc85c67d34530710c1d25cf7/src/main/java/io/gawish/decorator",
                is_primary_implementation: true
            },
            {
                body: "How hard would it be to create a `downgrade` method that detaches the last attachment ?"
            },
            {
                body: "Is there any other method way to create the same functionality using a different approach ? Will it remain as flexible the decorator pattern?"
            }
        ]
    },
    "composite": {
        title: "🪆 Composite pattern (aka. Object tree)",
        intent: "Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.",
        diagram_link: "./assets/composite-diagram.png",
        body: "You are creating an RPG (Role-playing game). In your game, your character carries a bag in which he can put the items he finds while hunting. The player's movement is affected by the weight of the items he's carrying, so it is important to know the total weight of the bag he's carrying.<strong>A bag can carry a maximum of 5 items</strong>. However, a player can extend the number of items he can carry by adding a new bag to his bag and thus increase the maximum amount of items he can carry.",
        body_img: "./assets/composite-reference-image.jpg",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/ada0701643be23adc2e24ac2658bf6d06a588916/src/main/java/io/gawish/composite",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?"
            },
            {
                body: "Improve the code structure and remove duplication by implementing the composite pattern.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/225f6291c593205d0eeabd63c31eff36056d86fa/src/main/java/io/gawish/composite",
                is_primary_implementation: true
            },
            {
                body: "How would you prevent someone from unintentionally using<strong>addCariable()</strong> on an item (ex.<strong>sword1.addCarriable(sword2)</strong>) ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/89eb388cc3c00feaca6a2b810c893fa1e09a72a8/src/main/java/io/gawish/composite",
                is_optional: true
            },
            {
                body: "How would you implement the method <strong>item.drop()</strong> to remove an item from its bag ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/0208bacd1f86ec2de54665e283c35647ef41b96c/src/main/java/io/gawish/composite",
                is_optional: true
            },
            {
                body: "Does this exercice remind you of an exercise we did in last year's OOP course ?",
                is_optional: true
            },
            {
                variant_name: "Caching variation",
                body: "How would you go about using caching in container objects to avoid recalculating the weights each time?"
            }
        ]
    },
    "bridge": {
        title: "🌉 Bridge pattern (aka. Handle / Body)",
        intent: "Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.",
        diagram_link: "./assets/bridge-diagram.png",
        body: "You are creating your own game. In the game, you have companion NPCs (Non-playing characters) that can help you the fights against the world's monsters. Depending on the different monsters you are facing, you can choose the behavior of your companion NPCs to be either: <strong>Aggressive</strong> or <strong>Defensive</strong>. You have 3 types of companions: <strong>Fighter</strong>,<strong>Medic</strong> & <strong>Hacker</strong>.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/095acd0e401e371e83d573daee8c25f9cd91bb46/src/main/java/io/gawish/bridge",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?"
            },
            {
                body: "How would you integrate the bridge pattern to divide and reorganise the code to enable more flexibility on extension ?",
                is_primary_implementation: true
            }
        ]
    },
    "facade": {
        title: "🏢 Facade pattern",
        intent: "Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the system easier to use.",
        diagram_link: "./assets/facade-diagram.png",
        body: "You are creating your 3D game. You are still in the beginning stages, so you want to simply display a couple of 3d models you have already designed to see how they look in the default game environment. However, as simple as this may appear, rendering a scene with 3d models in it requires a lot of work to be done.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/029b55d9f53e432ff2f420ffa0d4bf7fe529bd1f/src/main/java/io/gawish/facade",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?"
            },
            {
                body: "How would you simplify the code by introducing a facade ?",
                is_primary_implementation: true
            },
            {
                variant_name: "Multiple facades variation",
                body: "How can you make your system depend on a Facade abstraction so that you can have multiple different implementations ?",
                is_optional: true
            },
            {
                variant_name: "Static methods variation & Singleton",
                body: "Can you use static methods or singleton pattern to make the facade easier to use ?",
                is_optional: true
            }
        ]
    },
    "observer": {
        title: "👀 Observer pattern",
        intent: "Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",
        diagram_link: "./assets/observer-diagram.png",
        body: "You are creating your own game. In the game, multiple system have to interact to provide the player with a full experience. In this example, our game has 3 such systems:<strong>Physics System</strong> (responsible for simulating physics like falling objects and forces ...), <strong>Audio System</strong> (plays the necessary game sounds) and <strong>Achievements system</strong> (displays a popup for the user whenever he accomplishes a new achievement)",
        body_subtext: "Exercise idea based on this great \"Observer\" chapter in \"Game Programming Patterns\" free book.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/d21ef55d90da8d73cf0b3c20428972958fc3339e/src/main/java/io/gawish/observer",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure?"
            },
            {
                body: "How would you go about decoupling the different systems by using the observer pattern ?",
                is_primary_implementation: true
            },
            {
                body: "Let's say you want to add a UI system to display the player's health in a health bar. How hard would it be to integrate it ?",
                is_primary_implementation: true
            },
            {
                variant_name: "Event system variation",
                body: "How about observing the interesting action that is happening instead of the subject it is happening on ?",
                is_optional: true
            },
            {
                variant_name: "Linked List variation",
                body: "To improve program speed and avoid memory churn, you decide to use a linked list instead of a List.",
                is_optional: true
            }
        ]
    },
    "state": {
        title: "🔂 State pattern",
        intent: "State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.",
        diagram_link: "./assets/state-diagram.png",
        body: "You are creating a platformer game. In your game, the character can do multiple actions. The character can for example<strong>Jump</strong> (Only if he's Standing, we have to avoid Double jumps), <strong>Duck (crouch)</strong> (Only he's Standing) and <strong>Dive</strong> (If the player presses down while Jumping, the character does a <strong>Dive</strong>).",
        body_img: "./assets/celeste-states.png",
        body_subtext: "Exercise idea based on this great \"State\" chapter in \"Game Programming Patterns\" free book",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/835eca703754f67868891950bf767d2b58266c78/src/main/java/io/gawish/state",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ? Did you the bug with the current code ?"
            },
            {
                body: "How would you simplify this code by using the State pattern ?<i>[Start by drawing the state diagram]</i>",
                is_primary_implementation: true
            },
            {
                variant_name: "Enter & exit actions variation",
                body: "How can you improve the code by using enter and exit actions ?",
                is_optional: true
            },
            {
                variant_name: "Static objects variation",
                body: "How can you avoid having to create a new object for each action the user does ?",
                is_optional: true
            }
        ]
    },
    "template-method": {
        title: "📜 Template method pattern",
        intent: "Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.",
        diagram_link: "/assets/template-method-diagram.png",
        body: "You are building a game. In this game, you can <strong>Orcs</strong> and <strong>Monsters</strong>. Each of those AI enemies has a different strategy for each turn. However, if you take a careful look, you will see there are commonalities.",
        body_subtext: "<a href=\"https://refactoring.guru/design-patterns/template-method\">Exercise idea based on the example in this link.</a>",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/d7d7c1e8f541f88a37fe324d3dc7ee7523f797c3/src/main/java/io/gawish/templatemethod",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?"
            },
            {
                body: "How would you simplify this code by using the Template method pattern ?"
            }
        ]
    }
}

export default patterns;