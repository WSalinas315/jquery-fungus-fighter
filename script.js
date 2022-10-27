$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100;
let attackPts = 100;
let attackList = [{name: 'Arcane Scepter', APCost: 12, damage: 14},{name: 'Entangle', APCost: 23, damage: 9}, {name: 'Dragon Blade', APCost: 38, damage: 47}, {name: 'Star Fire', APCost: 33, damage: 25}];

function onReady() {
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    console.log('Let the fight begin!');

    $('.arcane-sceptre').on('click', arcaneAttack);
    $('.entangle').on('click', entangleAttack);
    $('.dragon-blade').on('click', bladeAttack);
    $('.star-fire').on('click', fireAttack);
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

// Call the attack function for attack type Arcane Septre
function arcaneAttack(){
    console.log('Using Arcane Secptre attack!');
    weAttack(0);
}

// Call the attack function for attack type Entangle
function entangleAttack(){
    console.log('Using Entangle attack!');
    weAttack(1);
}

// Call the attack function for attack type Dragon Blade
function bladeAttack(){
    console.log('Using Dragon Blade attack!');
    weAttack(2);
}

// Call the attack function for attack type Star Fire
function fireAttack(){
    console.log('Using Star Fire attack!');
    weAttack(3);
}

// Attack function
function weAttack(attackType){
    // Check that you have the Attack Points for the attack
    if(attackList[attackType].APCost > attackPts){
        console.log('Not enough attack points, try a different attack!');
        return;
    }
    //console.log('attacking');

    // Update attack points for state and render
    attackPts -= attackList[attackType].APCost;
    if(attackPts < 0){
        attackPts = 0;
    }
    console.log('Attack points are:', attackPts);
    $('.ap-text').text(attackPts);
    $('#ap-meter').val(attackPts);

    // Update fungus health for state and render
    fungusHP -= attackList[attackType].damage;
    if(fungusHP < 0){
        fungusHP = 0;
    }
    console.log('Fungus is at:', fungusHP);
    $('.hp-text').text(fungusHP);
    $('#hp-meter').val(fungusHP);

    // call fungusState function
    fungusState();
}

function fungusState(){
    if(fungusHP == 0){
        console.log('VICTORY!');
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
        return;
     } else if(attackPts <= 11 && fungusHP > 0){
        console.log('YOU HAVE FAILED. YOUR MORTAL WORLD IS DOOMED.');
        disableAttacks();
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        return;
     }
     console.log('...continue fighting.');
    return;
}

//graying out buttons
function disableAttacks(){
    //console.log('disable those attacks');
    $('.attack-btn').prop('disabled', true);
}
