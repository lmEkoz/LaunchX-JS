const searchPokemon = () => {
    const pokemonNameInput = document.getElementById("pokemonName");
    let pokemonName = pokemonNameInput.value;
    pokemonName = pokemonName.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokemonImg = data.sprites.front_default;
            pokemonImage(pokemonImg);
            showPokemon(data);
            showType(data, data.types.length);
            showChars(data);
            showAbility(data, data.abilities.length);
            showStats(data);
            colorBackgroundType(data);
        }
    });

}

const pokemonImage = (url) => {
    const pokemonPhoto = document.getElementById("pokemonImg");
    pokemonPhoto.src = url;
}

const showAbility = (data, ability_length) => {
    let pokemon_ability_label = "Ability";

    document.getElementById("pokemon_ability").innerHTML = pokemon_ability_label;
    document.getElementById("ability0").innerHTML = toPascalCase(data.abilities[0].ability.name);
    
    if (ability_length > 1) {
        document.getElementById("ability1").innerHTML = toPascalCase(data.abilities[1].ability.name);
    } else {
        document.getElementById("ability1").innerHTML = "";
    }
}

const showPokemon = (data) => {
    document.getElementById("pokemon").innerHTML = toPascalCase(data.name) ;
}

const showStats = (data) => {
    let pokemon_stats_label = "Stats"

    document.getElementById("pokemon_stats").innerHTML      = pokemon_stats_label;
    document.getElementById("hp").innerHTML                 = toPascalCase(data.stats[0].stat.name);
    document.getElementById("base_hp").innerHTML            = toPascalCase(data.stats[0].base_stat);  
    document.getElementById("attack").innerHTML             = toPascalCase(data.stats[1].stat.name);
    document.getElementById("base_attack").innerHTML        = toPascalCase(data.stats[1].base_stat);  
    document.getElementById("defense").innerHTML            = toPascalCase(data.stats[2].stat.name);
    document.getElementById("base_defense").innerHTML       = toPascalCase(data.stats[2].base_stat);  
    document.getElementById("sp_attack").innerHTML          = toPascalCase(data.stats[3].stat.name);
    document.getElementById("base_sp_attack").innerHTML     = toPascalCase(data.stats[3].base_stat);  
    document.getElementById("sp_defense").innerHTML         = toPascalCase(data.stats[4].stat.name);
    document.getElementById("base_sp_defense").innerHTML    = toPascalCase(data.stats[4].base_stat);
    document.getElementById("speed").innerHTML              = toPascalCase(data.stats[5].stat.name);
    document.getElementById("base_speed").innerHTML         = toPascalCase(data.stats[5].base_stat);  
}

const showChars = (data) => {
    let pokemon_height = "Height";
    let pokemon_weight = "Weight";
    let pokemon_xp_label = "Base XP"; 

    document.getElementById("pokemon_xp").innerHTML             = pokemon_xp_label;
    document.getElementById("pokemon_base_xp").innerHTML        = data.base_experience + " XP";
    document.getElementById("pokemon_height_label").innerHTML   = pokemon_height;
    document.getElementById("pokemon_weight_label").innerHTML   = pokemon_weight;
    document.getElementById("pokemon_height").innerHTML         = (data.height * .10) + " m";
    document.getElementById("pokemon_weight").innerHTML         = (data.weight * .10) + " kg";  
}

const showType = (data, type_length) => {
    document.getElementById("pokemon_type_img").src             = String("./assets/" + data.types[0].type.name + ".png");
    document.getElementById("pokemon_type_img").style.display   = "flex";
    document.getElementById("pokemon_type").innerHTML           = toPascalCase(data.types[0].type.name);

    if (type_length > 1){
        document.getElementById("pokemon_type_img1").src            = String("./assets/" + data.types[1].type.name + ".png");
        document.getElementById("pokemon_type_img1").style.display  = "flex";
        document.getElementById("pokemon_type1").innerHTML          = toPascalCase(data.types[1].type.name);
   } else {
        document.getElementById("pokemon_type1").innerHTML          = "";
        document.getElementById("pokemon_type_img1").style.display  = "none";
   }
}

function toPascalCase(str){
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()});
}


const colorBackgroundType = (data) => {
    let type = data.types[0].type.name;
    let color;
    switch (type) {
        case "normal":
            color = "#a59974";
            document.getElementById("pokemon_info").style.backgroundColor = color;
            break;
        case "fire":
            color = "#f26131";
            document.getElementById("pokemon_info").style.backgroundColor = color;
            break;
        case "water":
            color = "#2c9fda";
            document.getElementById("pokemon_info").style.backgroundColor = color;
            break;
        case "electric":
            color = "#fecc32";
            document.getElementById("pokemon_info").style.backgroundColor = color;
            break;
        case "grass":
            color = "#8bd336e";
            document.getElementById("pokemon_info").style.backgroundColor = color;
            break;
        case "ice":
            color = "#66ccc";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "fighting":
            color = "#c56e60";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "poison":
            color = "#b66ea8";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "ground":
            color = "#debe5d";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "flying":
            color = "#7e87e6";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "phychic":
            color = "#ff4d79";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "bug":
            color = "#a0cc46"
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "rock":
            color = "#a58542";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "ghost":
            color = "#6652cd";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "dragon":
            color = "#4f50e6";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "dark":
            color = "#745540";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "steel":
            color = "#a4aacd";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        case "fairy":
            color = "#e67dd5";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
        default:
            color = "#ffffff";
            document.getElementById("pokemon_info") .style.backgroundColor = color;
            break;
    }

}