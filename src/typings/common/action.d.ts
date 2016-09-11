interface Action {
  type: string;
  payload?;
  error?: boolean;
  meta?;
  filter?: string;
}
