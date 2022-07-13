export interface BadgeProps {
  text: string;
  type:
    | 'new'
    | 'completed'
    | 'popular'
    | 'active'
    | 'recommended'
    | 'pending'
    | 'primary-red'
    | 'not-available'
    | 'opposite'
    | 'deactivated';
}
