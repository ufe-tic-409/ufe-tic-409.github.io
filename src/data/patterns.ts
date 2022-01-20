import {Pattern} from "../types/pattern";

const patterns: { [key: string]: Pattern } = {
    "abstract-factory": {
        title: "🏭 Abstract factory pattern (aka. Kit)",
        intent: "Provide an interface for creating families of related or dependent objects without specifying their concrete classes",
        diagram_link: "/src/assets/abstract-factory.png",
        body: "Let's say you are creating a simple game. In the game, the player can do 3 actions: <strong>attack</strong>, <strong>travel</strong>, <strong>visit a friend</strong>. The game can have multiple different settings : <strong>Medieval</strong>, <strong>Futuristic</strong> and depending on the style chosen, different classes are used.",
        body_subtext: "<i>For example: When traveling, if you are using the medieval setting, you will be using a horse, however, if you are using the Futuristic setting, you will use a spaceship. Same when attacking, if you attack in medieval, you attack with a sword, however, if you are using the Futuristic setting, you will use a Laser Sabre.</i>",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/abstract-factory-0/src/main/java/io/gawish/abstractfactory",
        session: "1",
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
        diagram_link: "/src/assets/singleton.png",
        body: "Starting with the code implemented on the Builder pattern, in this example, you will have to implement a Logger class that will be used by all the different classes to generate log messages.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/singleton-0/src/main/java/io/gawish/singleton",
        session: "1",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?",
                answer: "The logger class is being used by all the other classes to log information to the console, however, with the way we are doing it, we had to pass the logger object to each and every class to be able to use in that class, we also had to create an instance of Logger in each of the classes. This is not ideal because it pollutes the code. Ideally, we would want a way to use the Logger from any class without having to pass it to that class."
            },
            {
                body: "How can you make it easier to access the Logger without having to pass it to each class ?",
                answer: "Using the singleton pattern is one solution to such problem. Another solution is Dependency Injection systems (we are not going to study it in this course)",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/singleton-1/src/main/java/io/gawish/singleton",
                is_primary_implementation: true
            },
            {
                variant_name: "Eager creation variation",
                body: "Implement the eager creation variation of the singleton on a <strong>Sound</strong> singleton class",
                answer: "This variant is used when you want to insure that a certain singleton is created whenever the program is run: this is important if you a are working with critical singletons that take a lot time to create and that you don't want to create lazily. The example here would be something like the Sound system, you don't want to load the sound system whenever the game is playing its first sound, you want to do it whenever the game is loading the first time to avoid any delays when the first sound is played.",
                is_optional: true,
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/singleton-2/src/main/java/io/gawish/singleton",
            },
            {
                variant_name: "Registry variation",
                body: "How can you implement multiple different loggers that log to different outputs ?",
                is_optional: true,
                is_not_implemented: true
            }
        ]
    },
    "builder": {
        title: "🏗 Builder pattern",
        intent: "Separate the construction of a complex object from its representation so that the same construction process can create different representations.",
        diagram_link: "/src/assets/builder.png",
        body: "Let's say you are building a sci-fi simulation game. In the game, you can create a <strong>Spacebase</strong> and each spacebase can have multiple <strong>Electricity Generators</strong>, <strong>Water Plants</strong> and <strong>Houses</strong>.",
        body_subtext: "For example: A spacebase can have 2 Electricity Generators, 2 Water Plants and 5 Houses.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/builder-0/src/main/java/io/gawish/builder",
        session: "1",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?",
                answer: "With the current code structure, each time we want to assign a new ElectricityGenerator to a House or a new WaterPlant to a house, we had to manually create the object, assign it to a variable, then assign it to the house. The same goes for the Spacebase, we have to create each ElectricityGenerator and WaterPlant before assigning it to the Spacebase. Effectively, we are doing the same thing each time. This is a hassle, it would be nice to have a way to easily make those creations without having to create the objects each time."
            },
            {
                body: "How can we refactor the code implementing the Builder pattern to hide the complexity ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/builder-1/src/main/java/io/gawish/builder",
                is_primary_implementation: true
            },
            {
                variant_name: "Fluent variation",
                body: "Can you implement a <a href=\"https://en.wikipedia.org/wiki/Fluent_interface\">fluent interface</a> for the builder to enable function chaining?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/builder-2/src/main/java/io/gawish/builder",
                is_optional: true
            },
            {
                variant_name: "Director variation",
                body: "Implement the director variation to facilitate the Spacebase creation process even further.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/builder-3/src/main/java/io/gawish/builder",
                is_optional: true
            }
        ]
    },
    // "factory-method": {
    //     title: "🛠 Factory method pattern",
    //     intent: "Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses."   ,
    //     diagram_link: "/src/assets/factory-method.png",
    // },
    "adapter": {
        title: "🔌 Adapter",
        intent: "Converts the interface of a class into another interface clients expect.",
        diagram_link: "/src/assets/adapter-diagram.png",
        body: "You are creating your game. In the game, you as a player can launch an attack using a <strong>Sword</strong>. After working on the game, you realize you need to add the possibility of attacking using a <strong>Gun</strong>. Both <strong>Sword</strong> and <strong>Gun</strong> have a different interfaces as you will see in the code because a sword is a close combat weapon and a gun is a ranged weapon.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/adapter-0/src/main/java/io/gawish/adapter",
        session: "2",
        questions: [
            {
                body: "Start by copying the start code and reading it."
            },
            {
                variant_name: "Composition variation",
                body: "How would you go about making the Gun work as a weapon without changing the Gun interface or the weapon interface ?",
                answer: "This can be done by adapting the Gun interface to the Weapon interface using an Adapter. In this variation, this is done by 'composing' the Gun in the adapter (GunWeapon) and whenever the 'attack' method is called on the adapter, redirecting it to the 'fire' method on the Gun",
                is_primary_implementation: true,
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/adapter-1/src/main/java/io/gawish/adapter"
            },
            {
                variant_name: "Inheritance variation",
                body: "Can you change the adapter to use Inheritance instead of composition ? What are the pros and cons of each method?",
                answer: "This is similar to the previous solution, however, the difference is that instead of 'composing' the Gun inside the adapter (GunWeapon), we make the adapter inherit the Gun and redirect the 'attack' call to its parent's (Gun) fire method.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/adapter-2/src/main/java/io/gawish/adapter"
            }
        ]
    },
    "proxy": {
        title: "🔁 Proxy pattern (aka. Surrogate)",
        intent: "Structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.",
        diagram_link: "/src/assets/proxy-diagram.png",
        body: "You are creating you sci-fi game. In your game, you must render multiple Players. Rendering is the process of converting the data structure containing information about a certain object and the environment surrounding it to an image to display. However, rendering a Player is a costly operation.",
        body_subtext: "For the sake of the example, we will assume that rendering doesn't need to be redone if the player hasn't change his position.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/proxy-0/src/main/java/io/gawish/proxy",
        session: "2",
        questions: [
            {
                body: "Start by copying the start code and reading it."
            },
            {
                body: "Start by implementing proxy pattern to protect the player from being re-rendered again if he hasn't changed his position.",
                answer: "In this solution, we are creating the (OptimisedPlayer) class which is a proxy, if you take a look, most of what it does is whenever, a call is done to it, it redirects it to the Player, however, this gives us the possibility of protecting intensive actions from being called when not necessary. In this case, rerender, is assumed to be an intensive action, and so here, we don't do it unless the boolean mustRerender is true, and we put the mustRerender boolean to true only if the Player takes a step. This ensures the rerender function doesn't re-run when not needed.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/proxy-1/src/main/java/io/gawish/proxy",
                is_primary_implementation: true
            },
            {
                body: "Finally, add <strong>`calculateRank`</strong> method than returns a number from 1 to 100. Assuming calculating the ranking is an intensive process. You can cache the last score that was returned to the user and only recalculate it if the players changes position. Use the proxy you developed in the last question to cache the score. Display the rank on each loop to view when it changes.",
                answer: "Same as the previous solution, however, here we are using the proxy also to cache a certain value to ensure that we don't have to recalculate it each time if it hadn't changed.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/proxy-2/src/main/java/io/gawish/proxy",
                is_primary_implementation: true
            }
        ]
    },
    "decorator": {
        title: "🎄 Decorator pattern (aka. Wrapper)",
        intent: "Attach additional responsibilities to an object (not a class) dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.",
        diagram_link: "/src/assets/decorator-diagram.png",
        body: "You are creating you sci-fi game. In your game, you can own a spaceship. Your spaceship has a basic gun and a basic shield. You can customize your spaceship by attaching addons to it. In our example your will be able to attach <strong>Laser gun</strong> to improve your attack. You can also equip a<strong>Point-defense cannon</strong> to improve your defense.",
        body_subtext: "We don't care about how much those addons will impact your attack and defense we will be focusing on ensuring they are activated at the correct time if they are attached to your spaceship. Also a spaceship may have any combination of the above equipments.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/decorator-0/src/main/java/io/gawish/decorator",
        session: "3",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?",
                answer: "The code structure is bad because now we only have 2 upgrades and we had to create 3 classes for it (2^2 - 1) to have all the different variations of upgrades. However, we can imagine if this number grows to for example 6 different upgrades, we will have to create 35 classes to have all the different variations. This is not a sustainable way to ensure we can easily create upgrades in the future."
            },
            {
                body: "Let's assume we wanted to add a new Attack weapon. How hard will it be ? Why ?",
                answer: "Hard because of the reasoning specified in the previous question."
            },
            {
                body: "Start by implementing the decorator pattern to improve the code structure.",
                answer: "This is done by having both the Decorators (upgrades here) and the Decorated Element (Spaceship) have the same interface and for the decorators to compose (have it as an instance variable) the Decorated object. Whenever, an attack or defend method is called on a Decorator, it will do its functionality and pass the call to the Decorated Object.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/decorator-1/src/main/java/io/gawish/decorator",
                is_primary_implementation: true
            },
            {
                body: "How hard would it be to create a `downgrade` method that detaches the last attachment ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/decorator-2/src/main/java/io/gawish/decorator",
                is_optional: true
            },
            {
                body: "Is there any other method way to create the same functionality using a different approach ? Will it remain as flexible the decorator pattern?",
                answer: "Yes, Strategy pattern provides a way to flexibly attach behavior to a certain class also. However, we will not study it in this course."
            }
        ]
    },
    "composite": {
        title: "🪆 Composite pattern (aka. Object tree)",
        intent: "Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.",
        diagram_link: "/src/assets/composite-diagram.png",
        body: "You are creating an RPG (Role-playing game). In your game, your character carries a bag in which he can put the items he finds while hunting. The player's movement is affected by the weight of the items he's carrying, so it is important to know the total weight of the bag he's carrying.<strong>A bag can carry a maximum of 5 items</strong>. However, a player can extend the number of items he can carry by adding a new bag to his bag and thus increase the maximum amount of items he can carry.",
        body_img: "/src/assets/composite-reference-image.jpg",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/composite-0/src/main/java/io/gawish/composite",
        session: "3",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?",
                answer: "Treating Bags and Items as different elements, complicates the code, we can see this in having to have 2 different 'addInBag' functions which do the same thing conceptually, having an addItem and addBag which do almost the same thing conceptually and complicates the getWeight because we have 2 pass on 2 different lists to calculate the total weight. If both Bag and Item had a common parent, we could have treated them using the same functions and thus reduced the code duplication and simplified it."
            },
            {
                body: "Improve the code structure and remove duplication by implementing the composite pattern.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/composite-1/src/main/java/io/gawish/composite",
                is_primary_implementation: true
            },
            {
                body: "How would you prevent someone from unintentionally using<strong>addCariable()</strong> on an item (ex.<strong>sword1.addCarriable(sword2)</strong>) ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/composite-2/src/main/java/io/gawish/composite",
                is_primary_implementation: true,
            },
            {
                body: "How would you implement the method <strong>item.drop()</strong> to remove an item from its bag ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/composite-3/src/main/java/io/gawish/composite",
                is_optional: true
            },
            {
                body: "Does this exercise remind you of an exercise we did in last year's OOP course ?",
                is_optional: true,
                answer: "Yes, the same idea was used for the Stylo, Ramette, Lot & Magasin exercise we did last year."
            },
            {
                variant_name: "Caching variation",
                body: "How would you go about using caching in container objects to avoid recalculating the weights each time?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/composite-4/src/main/java/io/gawish/composite",
                is_optional: true
            }
        ]
    },
    "bridge": {
        title: "🌉 Bridge pattern (aka. Handle / Body)",
        intent: "Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.",
        diagram_link: "/src/assets/bridge-diagram.png",
        body: "You are creating your own game. In the game, you have companion NPCs (Non-playing characters) that can help you the fights against the world's monsters. Depending on the different monsters you are facing, you can choose the behavior of your companion NPCs to be either: <strong>Aggressive</strong> or <strong>Defensive</strong>. You have 3 types of companions: <strong>Fighter</strong>,<strong>Medic</strong> & <strong>Hacker</strong>.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/bridge-0/src/main/java/io/gawish/bridge",
        session: "4",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?",
                answer: "To be able to have any combination of Companion and Fighting style, we had to create every combination which is something that is not sustainable. If for example, we decide to add a new Fighting Style, we will have to add 3 new Classes for each of the Companions in the new Fighting style. This is not a good structure."
            },
            {
                body: "How would you integrate the bridge pattern to divide and reorganise the code to enable more flexibility on extension ?",
                answer: "To be able to grow the 2 different hierarchies (FightingStyle) and (CompanionType). We will have to compose 1 of the structures into the other. In our case, we will compose (put as an instance variable) the Companion in the FightingStyle. This will allow us to grow those 2 different hierarchies separately.",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/bridge-1/src/main/java/io/gawish/bridge",
                is_primary_implementation: true
            }
        ]
    },
    "facade": {
        title: "🏢 Facade pattern",
        intent: "Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the system easier to use.",
        diagram_link: "/src/assets/facade-diagram.png",
        body: "You are creating your 3D game. You are still in the beginning stages, so you want to simply display a couple of 3d models you have already designed to see how they look in the default game environment. However, as simple as this may appear, rendering a scene with 3d models in it requires a lot of work to be done.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/facade-0/src/main/java/io/gawish/facade",
        session: "4",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?"
            },
            {
                body: "How would you simplify the code by introducing a facade ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/facade-1/src/main/java/io/gawish/facade",
                is_not_implemented: true,
                is_primary_implementation: true
            },
            {
                variant_name: "Static methods variation & Singleton",
                body: "Can you use static methods or singleton pattern to make the facade easier to use ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/facade-2/src/main/java/io/gawish/facade",
                is_primary_implementation: true,
            },
            {
                variant_name: "Multiple facades variation",
                body: "How can you make your system depend on a Facade abstraction so that you can have multiple different implementations ?",
                is_not_implemented: true,
                is_optional: true
            }
        ]
    },
    "observer": {
        title: "👀 Observer pattern",
        intent: "Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",
        diagram_link: "/src/assets/observer-diagram.png",
        body: "You are creating your own game. In the game, multiple system have to interact to provide the player with a full experience. In this example, our game has 3 such systems:<strong>Physics System</strong> (responsible for simulating physics like falling objects and forces ...), <strong>Audio System</strong> (plays the necessary game sounds) and <strong>Achievements system</strong> (displays a popup for the user whenever he accomplishes a new achievement)",
        body_subtext: "Exercise idea based on this great \"Observer\" chapter in \"Game Programming Patterns\" free book.",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/observer-0/src/main/java/io/gawish/observer",
        session: "5",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure?",
                answer: "While the code isn't very bad because we used Singletons for the different systems and so any system can access the other easily. The problem lies in the fact that conceptually, the Physics system shouldn't have to know about the Achievement System or the Audio System for example. In the ideal scenario, the Physics System should say that 'The player fell' and then each other System should independently react to this event. This is what the observer pattern helps us to do. Decouple the different systems in our software, by having a System send events and other systems subscribe to getting notified when this event happens and then react to it."
            },
            {
                body: "How would you go about decoupling the different systems by using the observer pattern ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/observer-1/src/main/java/io/gawish/observer",
                is_primary_implementation: true
            },
            {
                variant_name: "Event system variation",
                body: "How about observing the interesting action that is happening instead of the subject it is happening on ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/observer-2/src/main/java/io/gawish/observer",
                is_optional: true
            },
            {
                variant_name: "Linked List variation",
                body: "To improve program speed and avoid memory churn, you decide to use a linked list instead of a List.",
                is_optional: true,
                is_not_implemented: true
            }
        ]
    },
    "state": {
        title: "🔂 State pattern",
        intent: "State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.",
        diagram_link: "/src/assets/state-diagram.png",
        body: "You are creating a platformer game. In your game, the character can do multiple actions. The character can for example<strong>Jump</strong> (Only if he's Standing, we have to avoid Double jumps), <strong>Duck (crouch)</strong> (Only he's Standing) and <strong>Dive</strong> (If the player presses down while Jumping, the character does a <strong>Dive</strong>).",
        body_img: "/src/assets/celeste-states.png",
        body_subtext: "Exercise idea based on this great \"State\" chapter in \"Game Programming Patterns\" free book",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/state-0/src/main/java/io/gawish/state",
        session: "5",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?",
                answer: "Having complex branching (complex if conditions) isn't ideal and is very error prone. We will use the state pattern to simplify it by having a class that represents each state."
            },
            {
                body: "How would you simplify this code by using the State pattern ?<i>[Start by drawing the state diagram]</i>",
                is_primary_implementation: true,
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/state-1/src/main/java/io/gawish/state"
            },
            {
                variant_name: "Enter & exit actions variation",
                body: "How can you improve the code by using enter and exit actions ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/state-2/src/main/java/io/gawish/state",
                is_optional: true
            },
            {
                variant_name: "Static objects variation",
                body: "How can you avoid having to create a new object for each action the user does ?",
                code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/state-3/src/main/java/io/gawish/state",
                is_optional: true
            }
        ]
    },
    "template-method": {
        title: "📜 Template method pattern",
        intent: "Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.",
        diagram_link: "/src/assets/template-method-diagram.png",
        body: "You are building a game. In this game, you can <strong>Orcs</strong> and <strong>Monsters</strong>. Each of those AI enemies has a different strategy for each turn. However, if you take a careful look, you will see there are commonalities.",
        body_subtext: "<a href=\"https://refactoring.guru/design-patterns/template-method\">Exercise idea based on the example in this link.</a>",
        starter_code_link: "https://github.com/ufe-tic-409/design-patterns-examples/tree/template-method/src/main/java/io/gawish/templatemethod",
        session: "5",
        questions: [
            {
                body: "Start by copying the start code and reading it. What do you think about the code structure ?"
            },
            {
                body: "How would you simplify this code by using the Template method pattern ?",
                is_not_implemented: true
            }
        ]
    }
}

export default patterns;