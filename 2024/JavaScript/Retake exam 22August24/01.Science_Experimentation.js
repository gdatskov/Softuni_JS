function solve(inputList) {
    const MIN_Q = 0;
    const MAX_Q = 500;
    const storage = {}
    const formulae = {}
    const numberOfChems = inputList.shift()
    for (let i = 0; i < numberOfChems; i++) {
        let entry = inputList.shift()
        if (entry === 'End') break;
        const [ingredient, quantity] = entry.split(' # ');
        storage[ingredient] = Number(quantity);
    }

    for (const entry of inputList) {
        const commandList = entry.split(' # ')
        const command = commandList.shift()
        if (command === 'End') break;
        if (command === 'Mix') {
            let [chem1, chem2, amount] = commandList;
            amount = Number(amount);
            if (storage[chem1] >= amount && storage[chem2] >= amount) {
                storage[chem1] -= amount;
                storage[chem2] -= amount;
                console.log(`${chem1} and ${chem2} have been mixed. ${amount} units of each were used.`);
            } else {
                console.log(`Insufficient quantity of ${chem1}/${chem2} to mix.`);
            }
        }
        if (command === 'Replenish') {
            let [chem, amount] = commandList
            amount = Number(amount);
            if (!storage[chem]) {
                console.log(`The Chemical ${chem} is not available in the lab.`);
                // storage.chem = Number(amount)
            } else {
                storage[chem] += amount
                if (storage[chem] > MAX_Q) {
                    const extra = storage[chem] - MAX_Q
                    storage[chem] = MAX_Q
                    amount -= extra
                    console.log(`${chem} quantity increased by ${amount} units, reaching maximum capacity of 500 units!`);
                } else {
                    console.log(`${chem} quantity increased by ${amount} units!`);
                }
            }
        }

        if (command === 'Add Formula') {
            let [chem, formula] = commandList
            if (storage[chem]) {
                formulae[chem] = formula
                console.log(`${chem} has been assigned the formula ${formula}.`);
            } else {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            }
        }
    }

        for (const chem in storage) {
            let result = `Chemical: ${chem}, Quantity: ${storage[chem]}`
            if (formulae[chem]) {
                result += `, Formula: ${formulae[chem]}`
            }
            console.log(result);
        }

    // console.log(JSON.stringify(storage, null, 2));
    // console.log(JSON.stringify(formulae, null, 2));

};

// example
// solve([ '4',
//   'Water # 200',
//   'Salt # 100',
//   'Acid # 50',
//   'Base # 80',
//   'Mix # Water # Salt # 50',
//   'Replenish # Salt # 150',
//   'Add Formula # Acid # H2SO4',
//   'End'])

// Water and Salt have been mixed. 50 units of each were used.
// Salt quantity increased by 150 units!
// Acid has been assigned the formula H2SO4.
// Chemical: Water, Quantity: 150
// Chemical: Salt, Quantity: 200
// Chemical: Acid, Quantity: 50, Formula: H2SO4
// Chemical: Base, Quantity: 80

solve([ '3',
  'Sodium # 300',
  'Chlorine # 100',
  'Hydrogen # 200',
  'Mix # Sodium # Chlorine # 200',
  'Replenish # Sodium # 250',
  'Add Formula # Sulfuric Acid # H2SO4',
  'Add Formula # Sodium # Na',
  'Mix # Hydrogen # Chlorine # 50',
  'End'])
  
// Insufficient quantity of Sodium/Chlorine to mix.
// Sodium quantity increased by 200 units, reaching maximum capacity of 500 units!
// The Chemical Sulfuric Acid is not available in the lab.
// Sodium has been assigned the formula Na.
// Hydrogen and Chlorine have been mixed. 50 units of each were used.
// Chemical: Sodium, Quantity: 500, Formula: Na
// Chemical: Chlorine, Quantity: 50
// Chemical: Hydrogen, Quantity: 150
