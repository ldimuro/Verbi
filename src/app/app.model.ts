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
    id?: string;
}

export class TodaysGameData {
    today_word?: string;
    games_played_num?: number;
    total_points_scored?: number;
    average_score?: number;
    raw_scores?: any[];
    high_score?: any;
}

export class PercentileData {
    high_score: number;
    low_score: number;
    mean: number;
    median: number;
    mode: any;
    percentile?: any;
    percentile_graphic?: any;
    special_case?: any;
}

export class Letter {
    name: string;
    opacity: string;
    enabled: boolean;
    points: number;
    row: string;
    point_color: string;
    font_color: string;
}

export class Cell {
    name: string;
    value: string;
    point_value: number;
    color: string;
    user_letter_index: any;
    font_color: string;
    selected: boolean;
}
