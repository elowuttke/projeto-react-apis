import bug from "../assents/bug.png";
import dark from "../assents/dark.png";
import dragon from "../assents/dragon.png";
import electric from "../assents/electric.png";
import fairy from "../assents/fairy.png";
import fighting from "../assents/fighting.png";
import fire from "../assents/fire.png";
import flying from "../assents/flying.png";
import ghost from "../assents/ghost.png";
import grass from "../assents/grass.png";
import ground from "../assents/ground.png";
import ice from "../assents/ice.png";
import normal from "../assents/normal.png";
import poison from "../assents/poison.png";
import psychic from "../assents/psychic.png";
import rock from "../assents/rock.png";
import steel from "../assents/steel.png";
import water from "../assents/water.png";

export const getTypesImages = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return normal;
  }
};
