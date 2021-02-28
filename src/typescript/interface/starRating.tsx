export interface StarRatingProps {
  title: string;
  published: boolean;
  user: string;
  rating: number;
  id: number;
}
export interface Stars {
  index: number;
  color: string;
}

export interface StarFigureProps {
  fullStarCount: number;
}
