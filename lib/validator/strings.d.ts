import { Result } from "./results";
import { ErrorMessage } from "./validator";
import { NonEmpty } from "taghiro";
export { vNotEmpty };
declare function vNotEmpty<T extends {
    length: number;
}>(value: T): Result<T & NonEmpty, ErrorMessage>;
