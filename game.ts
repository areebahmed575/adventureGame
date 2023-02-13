import inquirer from "inquirer";
let c =Math.random()
let enemies:string[]=["Skeleton","Zombie","Warrior","Assassin"]
let maxEnemiesHealth:number=75
let enemyAttackDamag=25

let health:number=100
let attackDamage:number=50
let noOfHealthPoitions:number=3
let noOfHealthhealPoitions:number=30
let noOfPoitionsDropChance:number=50


let runnning:boolean =true


type ansType={
    input:string

}
console.log("Welcome to the game")
while (runnning){
    console.log("..................")
    let enemiesHealth = Math.floor(c* maxEnemiesHealth);
    let enemy = enemies[Math.floor(c * enemies.length)];
    console.log("\t# " + enemy + " has appeared! #\n");

    while(enemiesHealth > 0){
        console.log("\tYour HP: " + health);
        console.log("\t" + enemy + "'s HP: " + enemiesHealth);
        console.log("\n\tWhat would you like to do?");
        console.log("\t1. Attack");
        console.log("\t2. Drink health potion");
        console.log("\t3. Run");
        let answer:ansType = await inquirer.prompt([
            {
              type: 'input',
              message: '',
              name: 'input'
            }
          ])
        if(answer.input == "1"){
            let damageDealt:number=Math.floor(c*attackDamage) ;
            let damageTake:number=Math.floor(c*enemyAttackDamag)
        
        health =health - damageTake
        enemiesHealth -= damageDealt
        console.log("\t> You strike the " + enemy + " for " + damageDealt + " damage");
        console.log("\t> You received " + damageTake + " in retaliation");

        if(health < 1){
            console.log("\t You have taken too much damage,You are too weak to go on")
            break
        }


        }
        else if(answer.input == "2"){
            if(noOfHealthPoitions > 0){
                health +=noOfHealthhealPoitions
                noOfHealthPoitions--
                console.log("\t> You drank a health potion, healed for: " + noOfHealthhealPoitions + "." +
                "\n\t> You now have " + health + " HP." +
                "\n\t> You now have " + noOfHealthPoitions + " health potions left.\n");
            }
            else {
                console.log("\t> You have no health potions, defeat enemies for a chance to get one");
            }

            
        }
        else if(answer.input == "3"){
            console.log("\t> You run away from the " + enemy);
            continue 
        }
        else {
            console.log("\tInvalid command");
        }


    }
    if(health < 1){
        console.log("You limp out of the dungeon, weak from battle.")
        break
    }
    console.log("--------------------------------------")
    console.log("# " + enemy + " was defeated! # ")
    console.log("# You have " + health + "HP left #")
    if(Math.floor(c * 100) < noOfPoitionsDropChance){
        noOfHealthPoitions++
        console.log("# The " + enemy + " dropped a health potion. #")
        console.log(" # You now have " + noOfHealthPoitions  + " health potion(s). #")
    }
    console.log("--------------------------------------")
    console.log("What would you like to do now?")
    console.log("1. Continue fighting")
    console.log("2. Exit dungeon")
    let ans:ansType = await inquirer.prompt([
        {
          type: 'input',
          message: '',
          name: 'input'
        }
      ])
    while(ans.input != "1"  &&ans.input != "2"){
        console.log("Invalid command")
    }
    if(ans.input == "1"){
        console.log("You continue your adventure.")
    }
    else if(ans.input == "2"){
        console.log("You exit the game")
        break
    }
    
}
console.log("######################");
console.log("# THANKS FOR PLAYING #");
console.log("######################");
