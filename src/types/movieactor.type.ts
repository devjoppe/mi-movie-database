import {actorInt, allRelatedActorsInt} from "../interfaces/actors.interface.ts";
import {movieInt} from "../interfaces/movie.interface.ts";
import {allRelatedMoviesInt} from "../interfaces/movies.interface.ts";

export type movieActorType = movieInt | actorInt | null
export type allRelatedActorMovieType = allRelatedMoviesInt | allRelatedActorsInt | null