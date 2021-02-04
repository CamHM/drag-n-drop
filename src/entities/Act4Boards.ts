import Option, {Board} from "./option.entity";

export default interface Act4Options {
    boards: Board[],
    options: {
        snail1: Option,
        ball1: Option,
        pencil1: Option,
        moon1: Option,
        ball2: Option,
        flower1: Option,
        iceCream1: Option,
        star1: Option,
        sun1: Option
    }
}
