export class UserData {
    id: string;
    high_score: number;
    highest_scoring_word: {
        word: string;
        score: number;
    };
    total_points_scored: number;
    games_played: GameData[];
    average_score_per_game: number;
}

export class GameData {
    timestamp: string;
    correct_words: string[];
    score: number;
}
