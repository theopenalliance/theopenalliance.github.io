export interface AllOriginsResponse {
  contents: string;
  status: AllOriginsStatus;
}
export interface AllOriginsStatus {
  url: string;
  content_type: string;
  content_length: number;
  http_code: number;
  response_time: number;
}

export interface CDThread {
  post_stream: PostStream;
  timeline_lookup?: (number[] | null)[] | null;
  tags?: string[] | null;
  id: number;
  title: string;
  fancy_title: string;
  posts_count: number;
  created_at: string;
  views: number;
  reply_count: number;
  like_count: number;
  last_posted_at: string;
  visible: boolean;
  closed: boolean;
  archived: boolean;
  has_summary: boolean;
  archetype: string;
  slug: string;
  category_id: number;
  word_count: number;
  deleted_at?: null;
  user_id: number;
  featured_link?: null;
  pinned_globally: boolean;
  pinned_at?: null;
  pinned_until?: null;
  image_url?: null;
  slow_mode_seconds: number;
  draft?: null;
  draft_key: string;
  draft_sequence: number;
  posted: boolean;
  unpinned?: null;
  pinned: boolean;
  current_post_number: number;
  highest_post_number: number;
  last_read_post_number: number;
  last_read_post_id: number;
  deleted_by?: null;
  actions_summary?: ActionsSummaryEntity[] | null;
  chunk_size: number;
  bookmarked: boolean;
  topic_timer: TopicTimer;
  message_bus_last_id: number;
  participant_count: number;
  show_read_indicator: boolean;
  thumbnails?: null;
  valid_reactions?: string[] | null;
  user_chosen_thumbnail_url?: null;
  details: Details;
  pending_posts?: null[] | null;
}
export interface PostStream {
  posts?: PostsEntity[] | null;
  stream?: number[] | null;
}
export interface PostsEntity {
  id: number;
  name: string;
  username: string;
  avatar_template: string;
  created_at: string;
  cooked: string;
  post_number: number;
  post_type: number;
  updated_at: string;
  reply_count: number;
  reply_to_post_number?: number | null;
  quote_count: number;
  incoming_link_count: number;
  reads: number;
  readers_count: number;
  score: number;
  yours: boolean;
  topic_id: number;
  topic_slug: string;
  display_username: string;
  primary_group_name?: null;
  primary_group_flair_url?: null;
  primary_group_flair_bg_color?: null;
  primary_group_flair_color?: null;
  version: number;
  can_edit: boolean;
  can_delete: boolean;
  can_recover: boolean;
  can_wiki: boolean;
  link_counts?: LinkCountsEntity[] | null;
  read: boolean;
  user_title?: string | null;
  bookmarked: boolean;
  actions_summary?: ActionsSummaryEntity1[] | null;
  moderator: boolean;
  admin: boolean;
  staff: boolean;
  user_id: number;
  hidden: boolean;
  trust_level: number;
  deleted_at?: null;
  user_deleted: boolean;
  edit_reason?: null;
  can_view_edit_history: boolean;
  wiki: boolean;
  user_custom_fields?: UserCustomFields | null;
  user_created_at: string;
  user_date_of_birth?: string | null;
  reactions?: (ReactionsEntity | null)[] | null;
  current_user_reaction?: CurrentUserReaction | null;
  reaction_users_count: number;
  current_user_used_main_reaction: boolean;
  can_accept_answer: boolean;
  can_unaccept_answer: boolean;
  accepted_answer: boolean;
  notice?: Notice | null;
  reply_to_user?: ReplyToUser | null;
}
export interface LinkCountsEntity {
  url: string;
  internal: boolean;
  reflection: boolean;
  title?: string | null;
  clicks: number;
}
export interface ActionsSummaryEntity1 {
  id: number;
  count?: number | null;
  acted?: boolean | null;
  can_act?: boolean | null;
}
export interface UserCustomFields {
  user_field_4: string;
}
export interface ReactionsEntity {
  id: string;
  type: string;
  count: number;
}
export interface CurrentUserReaction {
  id: string;
  type: string;
  can_undo: boolean;
}
export interface Notice {
  type: string;
}
export interface ReplyToUser {
  username: string;
  avatar_template: string;
}
export interface ActionsSummaryEntity {
  id: number;
  count: number;
  hidden: boolean;
  can_act: boolean;
}
export interface TopicTimer {
  id: number;
  execute_at: string;
  duration_minutes: number;
  based_on_last_post: boolean;
  status_type: string;
  category_id?: null;
}
export interface Details {}
