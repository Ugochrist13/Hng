
// Create a common type to represent movie data
interface MovieData {
    id: number;
    title: string;
    original_language: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    popularity: number;
    adult: boolean;
    runtime: number;
    overview: string;
    genres: { id: number; name: string }[]; 
  }
  
  export default MovieData;
  