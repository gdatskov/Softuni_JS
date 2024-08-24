function solve(inputList) {
    const characterNumber = Number(inputList.shift())
    const characterDict = {}

    const isAlive = (superheroName) => {
        characterDict[superheroName].energy >= 0 ? characterDict[superheroName].isAlive = true : characterDict[superheroName].isAlive = false
        return characterDict[superheroName].isAlive
    };
    const checkSuperpowers = (superheroName, ability) => {
        const superpowersList = characterDict[superheroName].superpowers;
        return superpowersList.includes(ability)
    }
    const checkEnergy = (superheroName, requiredEnergy) => {
        const currentEnergy = characterDict[superheroName].energy;
        return currentEnergy >= requiredEnergy
    }
    const getEnergyValue = (superheroName) => characterDict[superheroName].energy;
    const increaseEnergyValue = (superheroName, energyAdd) => {
        characterDict[superheroName].energy += Number(energyAdd)
        if (characterDict[superheroName].energy > MAX_ENERGY)  {characterDict[superheroName].energy = MAX_ENERGY}
    }

    const MAX_ENERGY = 100

    for (let i = 0; i < characterNumber; i++) {
        // "{superhero name}-{superpower}-{energy}"
        const characterInfo = inputList.shift().split('-');
        const [superheroName, superpowersList, energy] = characterInfo;
        superpowers = superpowersList.split(',')
        characterDict[superheroName] = {energy: Number(energy), superpowers, isAlive: true}
    }

    for (const command of inputList) {
        if (command === "Evil Defeated!") {
            break;
        }
        else {
            const instructions = command.split(' * ')
            const action = instructions.shift()
            if (action === 'Use Power') {
                const [superhero, superpower, energy] = instructions
                if (isAlive(superhero)) {
                    if (checkSuperpowers(superhero, superpower) && checkEnergy(superhero, energy)) {
                        characterDict[superhero].energy -= energy
                        console.log(`${superhero} has used ${superpower} and now has ${characterDict[superhero].energy} energy!`);
                    }
                    else {
                        console.log(`${superhero} is unable to use ${superpower} or lacks energy!`)
                    }
                }
            }
            if (action === 'Train') {
                const [superhero, energyAdd] = instructions;
                if (isAlive(superhero)) {
                    const energyBefore = getEnergyValue(superhero);
                    if (energyBefore < 100) {
                        increaseEnergyValue(superhero, energyAdd);
                        const energyAfter = getEnergyValue(superhero);
                        const gainedEnergy = energyAfter - energyBefore
                        console.log(`${superhero} has trained and gained ${gainedEnergy} energy!`);
                    } else {
                        console.log(`${superhero} is already at full energy!`);
                    }
                }
            }
            if (action === 'Learn') {
                const [superhero, superpowerAdd] = instructions;
                const notNewAbility = checkSuperpowers(superhero, superpowerAdd);
                if (isAlive(superhero)) {
                    if (notNewAbility) {
                        console.log(`${superhero} already knows ${superpowerAdd}.`);
                    } else {
                        characterDict[superhero].superpowers.push(superpowerAdd);
                        console.log(`${superhero} has learned ${superpowerAdd}!`);
                    }
                }
        }

        }
        
    }

    for (const charName in characterDict) {
        const character = characterDict[charName]
        if (character.isAlive) {
            console.log(
            `Superhero: ${charName}\n- Superpowers: ${character.superpowers.join(', ')}\n- Energy: ${character.energy}`
            );
        }
    }
}

    // solve([
    //     "3",
    //     "Iron Man-Repulsor Beams,Flight-80",
    //     "Thor-Lightning Strike,Hammer Throw-10",
    //     "Hulk-Super Strength-60",
    //     "Use Power * Iron Man * Flight * 30",
    //     "Train * Thor * 20",
    //     "Train * Hulk * 50",
    //     "Learn * Hulk * Thunderclap",
    //     "Use Power * Hulk * Thunderclap * 70",
    //     "Evil Defeated!"
    // ])
        // Output
    // Iron Man has used Flight and now has 50 energy! 
    // Thor has trained and gained 20 energy! 
    // Hulk has trained and gained 40 energy! 
    // Hulk has learned Thunderclap! 
    // Hulk has used Thunderclap and now has 30 energy! 
    // Superhero: Iron Man 
    // - Superpowers: Repulsor Beams, Flight 
    // - Energy: 50 
    // Superhero: Thor 
    // - Superpowers: Lightning Strike, Hammer Throw 
    // - Energy: 30 
    // Superhero: Hulk 
    // - Superpowers: Super Strength, Thunderclap 
    // - Energy: 30

    solve([
        "2",
        "Iron Man-Repulsor Beams,Flight-20",
        "Thor-Lightning Strike,Hammer Throw-100",
        "Train * Thor * 20",
        "Use Power * Iron Man * Repulsor Beams * 30",
        "Evil Defeated!"
    ])
        // Output
    // Thor is already at full energy! 
    // Iron Man is unable to use Repulsor Beams or lacks energy! 
    // Superhero: Iron Man 
    // - Superpowers: Repulsor Beams, Fligh
    // - Energy: 20 
    // Superhero: Thor 
    // - Superpowers: Lightning Strike, Hammer Throw
    // - Energy: 100

    // solve ([
    //     "2",
    //     "Iron Man-Repulsor Beams,Flight-100",
    //     "Thor-Lightning Strike,Hammer Throw-50",
    //     "Train * Thor * 20",
    //     "Learn * Thor * Hammer Throw",
    //     "Use Power * Iron Man * Repulsor Beams * 30",
    //     "Evil Defeated!"
    // ])
        // Output
    // Thor has trained and gained 20 energy! 
    // Thor already knows Hammer Throw. 
    // Iron Man has used Repulsor Beams and now has 70 energy! 
    // Superhero: Iron Man 
    // - Superpowers: Repulsor Beams, Flight 
    // - Energy: 70 
    // Superhero: Thor 
    // - Superpowers: Lightning Strike, Hammer Throw 
    // - Energy: 70


    