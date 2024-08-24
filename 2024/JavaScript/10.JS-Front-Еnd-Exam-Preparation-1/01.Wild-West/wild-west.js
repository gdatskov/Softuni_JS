// Examples

// Input

// (["2",
//    "Gus 100 0",
//    "Walt 100 6",
//    "FireShot - Gus - Bandit",
//    "TakeHit - Gus - 100 - Bandit",
//    "Reload - Walt",
//    "Ride Off Into Sunset"])	


// Output

// Gus doesn't have enough bullets to shoot at Bandit!
// Gus was gunned down by Bandit!
// Walt's pistol is fully loaded!
// Walt
// HP: 100
// Bullets: 6


function solve(inputList) {
    const characterNumber = Number(inputList.shift())
    const characterList = {}

    for (let i = 0; i < characterNumber; i++) {
        const characterInfo = inputList.shift().split(' ');
        const [charName, hp, bullets] = characterInfo
        characterList[charName] = {hp: Number(hp), bullets: Number(bullets), isAlive: true}
    }

    // console.log(JSON.stringify(characterList, null, 2));

    for (const instruction of inputList) {
        if (instruction !== "Ride Off Into Sunset") {
            const instructionList = instruction.split(' - ')
            const command = instructionList.shift();
            if (command === 'FireShot') {
                const [character, target] = instructionList;
                const charInfo = characterList[character]
                if (charInfo.bullets > 0) {
                    charInfo.bullets -= 1;
                    console.log(`${character} has successfully hit ${target} and now has ${charInfo.bullets} bullets!`);
                }
                else {
                    console.log(`${character} doesn't have enough bullets to shoot at ${target}!`);
                }

            }
            if (command === 'TakeHit') {
                const [character, damage, attacker] = instructionList;
                const characterInfo = characterList[character];
                characterInfo.hp -= damage
                if (characterInfo.hp > 0) {
                    console.log(`${character} took a hit for ${damage} HP from ${attacker} and now has ${characterInfo.hp} HP!`);
                }
                else {
                    console.log(`${character} was gunned down by ${attacker}!`);
                    characterInfo.isAlive = false;
                }

            }
            if (command === 'Reload') {
                const [character] = instructionList;
                const characterInfo = characterList[character];
                const currentBullets = characterInfo.bullets;
                if (currentBullets < 6) {
                    console.log(`${character} reloaded ${6-currentBullets} bullets!`);
                    characterInfo.bullets = 6
                }
                else {
                    console.log(`${character}'s pistol is fully loaded!`);
                }


            }
            if (command === 'PatchUp') {
                let [character, amount] = instructionList;
                amount = Number(amount)
                const characterInfo = characterList[character];
                const currentHp = characterInfo.hp;
                if (!characterInfo.isAlive) continue
                if (currentHp < 100) {
                    characterInfo.hp = currentHp + amount;
                    if (characterInfo.hp > 100) {
                        amount -= characterInfo.hp - 100
                        characterInfo.hp = 100

                    }
                    console.log(`${character} patched up and recovered ${amount} HP!`);
                }
                else {
                    console.log(`{character} is in full health!`);
                }
            }
        }
        else {
            for (const charName in characterList) {
                const character = characterList[charName]
                if (character.isAlive) {
                    console.log(
                    `${charName}\n  HP: ${character.hp}\n  Bullets: ${character.bullets}`
                    );
                }
            }
            break;
        }
    }
}   

solve(["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
"TakeHit - Walt - 1 - Bandit",
 "PatchUp - Walt - 200" ,
 "Reload - Jesse",
 "Ride Off Into Sunset",
 "TakeHit - Walt - 90 - Bandit"])


